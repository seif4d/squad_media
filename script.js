'use strict';

// The navigation is a dismissible mobile drawer with a keyboard focus loop.
const menuButton = document.getElementById('mobileToggle');
const navigation = document.getElementById('navLinks');
const backdrop = document.getElementById('menuBackdrop');
const mobileLayout = window.matchMedia('(max-width: 900px)');

function closeMenu(restoreFocus = true) {
  const wasOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'فتح القائمة');
  menuButton.querySelector('span').textContent = '☰';
  backdrop.hidden = true;
  document.body.classList.remove('menu-open');
  if (restoreFocus && wasOpen) menuButton.focus({ preventScroll: true });
}

menuButton.addEventListener('click', () => {
  if (menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    return;
  }
  navigation.classList.add('is-open');
  menuButton.setAttribute('aria-expanded', 'true');
  menuButton.setAttribute('aria-label', 'إغلاق القائمة');
  menuButton.querySelector('span').textContent = '×';
  backdrop.hidden = false;
  document.body.classList.add('menu-open');
  navigation.querySelector('a').focus();
});
backdrop.addEventListener('click', () => closeMenu());
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', event => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  const target = document.getElementById(link.hash.slice(1));
  if (!target) return;
  // Native fragment navigation may clear focus after the drawer closes.
  // Keep the URL and scroll destination while returning focus to its trigger.
  event.preventDefault();
  history.pushState(null, '', link.hash);
  closeMenu();
  target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}));
document.addEventListener('keydown', event => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeMenu();
  }
  if (event.key === 'Tab') {
    const focusable = [menuButton, ...navigation.querySelectorAll('a[href]')];
    const current = focusable.indexOf(document.activeElement);
    const next = (current + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length;
    event.preventDefault();
    focusable[next].focus();
  }
});
mobileLayout.addEventListener('change', () => closeMenu(false));
document.documentElement.classList.add('navigation-enhanced');

// Progressive enhancement: without JavaScript all pricing offers stay visible.
const pricingNavigation = document.querySelector('.pricing-nav');
const pricingTabs = [...pricingNavigation.querySelectorAll('.pricing-tab-btn')];
const pricingPanels = [...document.querySelectorAll('.tab-panel')];
pricingNavigation.setAttribute('role', 'tablist');
pricingNavigation.setAttribute('aria-label', 'نماذج التعاون');
document.getElementById('pricing').classList.add('tabs-enhanced');

function activateTab(tab, focus = false) {
  pricingTabs.forEach(item => {
    const selected = item === tab;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  pricingPanels.forEach(panel => {
    panel.hidden = panel.id !== tab.dataset.tab;
  });
  if (focus) tab.focus();
}

pricingTabs.forEach(tab => {
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', tab.dataset.tab);
  const panel = document.getElementById(tab.dataset.tab);
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tab.id);
  panel.tabIndex = 0;
  tab.addEventListener('click', () => activateTab(tab));
  tab.addEventListener('keydown', event => {
    const index = pricingTabs.indexOf(tab);
    let next;
    // Visual order follows the page's right-to-left direction.
    if (event.key === 'ArrowLeft') next = (index + 1) % pricingTabs.length;
    if (event.key === 'ArrowRight') next = (index - 1 + pricingTabs.length) % pricingTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = pricingTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      activateTab(pricingTabs[next], true);
    }
  });
});
activateTab(pricingTabs.find(tab => tab.classList.contains('active')) || pricingTabs[0]);

// Commission applies to platform spend: 20% standalone, 10% with a monthly package.
const calculator = document.getElementById('feeCalculator');
const calculatorPlan = document.getElementById('calculatorPlan');
const calculatorSpend = document.getElementById('calculatorSpend');
const calculatorFee = document.getElementById('calculatorFee');
const calculatorTotal = document.getElementById('calculatorTotal');
const calculatorCommission = document.getElementById('calculatorCommission');
const calculatorCommissionLabel = document.getElementById('calculatorCommissionLabel');
const calculatorBreakdown = document.getElementById('calculatorBreakdown');
const formatMoney = value => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);
const monthlyFees = { standalone: 0, presence: 1500, growth: 3000, scale: 5000 };

function showMoney(output, amount) {
  output.replaceChildren(document.createTextNode(formatMoney(amount) + ' '));
  const unit = document.createElement('small');
  unit.textContent = 'ج.م';
  output.append(unit);
}

function updateFeeEstimate() {
  const spend = calculatorSpend.valueAsNumber;
  const fee = monthlyFees[calculatorPlan.value];
  const rate = calculatorPlan.value === 'standalone' ? 0.2 : 0.1;
  calculatorCommissionLabel.textContent = `عمولة إدارة الإعلان (${rate * 100}%)`;
  showMoney(calculatorFee, fee);
  // Calculate in piastres so displayed line items always add up to the total.
  const spendCents = Math.round(spend * 100);
  const commissionCents = Math.round(spendCents * rate);
  const totalCents = fee * 100 + spendCents + commissionCents;
  if (!Number.isFinite(spend) || spend < 0 || !calculatorSpend.validity.valid || !Number.isSafeInteger(totalCents)) {
    calculatorCommission.textContent = '—';
    calculatorTotal.textContent = '—';
    calculatorSpend.setAttribute('aria-invalid', 'true');
    calculatorBreakdown.textContent = 'اكتب ميزانية إعلان صحيحة تساوي صفرًا أو أكثر، بحد أقصى منزلتين عشريتين.';
    return;
  }
  calculatorSpend.removeAttribute('aria-invalid');
  showMoney(calculatorCommission, commissionCents / 100);
  showMoney(calculatorTotal, totalCents / 100);
  const packageLine = fee ? `${formatMoney(fee)} ج.م أتعاب الباقة + ` : 'بدون اشتراك في باقة: ';
  calculatorBreakdown.textContent = `${packageLine}${formatMoney(commissionCents / 100)} ج.م عمولة الإدارة (${rate * 100}%) + ${formatMoney(spendCents / 100)} ج.م ميزانية الإعلان المدفوعة للمنصة.`;
}
calculator.addEventListener('submit', event => { event.preventDefault(); updateFeeEstimate(); });
calculator.addEventListener('input', updateFeeEstimate);
calculatorPlan.addEventListener('change', updateFeeEstimate);
updateFeeEstimate();
calculator.closest('.fee-calculator').hidden = false;

// Keep orientation clear as visitors move between the long page's sections.
if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting);
    if (!visible.length) return;
    const current = visible[visible.length - 1].target.id;
    navigation.querySelectorAll('a[href^="#"]').forEach(link => {
      if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section').forEach(section => sectionObserver.observe(section));
}

// Native details exposes its expanded state and works without JavaScript.
const questions = [...document.querySelectorAll('.faq-item')];
questions.forEach(question => question.addEventListener('toggle', () => {
  if (question.open) questions.forEach(other => { if (other !== question) other.open = false; });
}));

// Form data stays in the browser until the visitor chooses to send in WhatsApp.
const leadForm = document.getElementById('leadForm');
const leadService = document.getElementById('leadService');
const leadBudget = document.getElementById('leadBudget');
const leadBudgetGroup = document.getElementById('leadBudgetGroup');
const adBudgetServices = new Set(['consultation', 'meta-management', 'presence', 'growth', 'scale', 'partnership']);
function updateServiceFields() {
  const needsAdBudget = adBudgetServices.has(leadService.value);
  leadBudgetGroup.hidden = !needsAdBudget;
  leadBudget.required = needsAdBudget;
  leadBudget.disabled = !needsAdBudget;
}
leadService.addEventListener('change', updateServiceFields);
updateServiceFields();
const formStatus = document.getElementById('formStatus');
const whatsappFallback = document.getElementById('whatsappFallback');
leadForm.addEventListener('input', () => {
  // A previously prepared link must not send stale details after an edit.
  whatsappFallback.hidden = true;
  formStatus.textContent = '';
});
leadForm.querySelectorAll('input[required]').forEach(input => {
  input.addEventListener('input', () => input.setCustomValidity(''));
});

// The contact message follows the offer the visitor actually selected.
document.querySelectorAll('[data-offer]').forEach(link => {
  link.addEventListener('click', () => {
    leadService.value = link.dataset.offer;
    updateServiceFields();
    leadService.dispatchEvent(new Event('input', { bubbles: true }));
  });
});

leadForm.addEventListener('submit', event => {
  event.preventDefault();
  leadForm.querySelectorAll('input[required]').forEach(input => {
    input.setCustomValidity(input.value.trim() ? '' : 'يرجى كتابة هذا الحقل.');
  });
  if (!leadForm.reportValidity()) return;

  const type = document.getElementById('leadType');
  const budget = document.getElementById('leadBudget');
  const message = [
    '🚀 *طلب استشارة وتطوير نمو | SQUAD MEDIA*',
    '',
    'مرحباً فريق سكواد! 👋 مهتم بالتعاون معكم لنمو نشاطي التجاري.',
    '',
    '📋 *بيانات الطلب:*',
    `👤 *الاسم:* ${document.getElementById('leadName').value.trim()}`,
    `🏢 *البراند / النشاط:* ${document.getElementById('leadBrand').value.trim()}`,
    `📦 *الخدمة المطلوبة:* ${leadService.selectedOptions[0].textContent.trim()}`,
    ...(monthlyFees[leadService.value] ? ['🏷️ *سعر الباقة:* بعد الخصم ولفترة محدودة.', '📊 *عمولة إدارة الإعلان:* 10% من ميزانية الإعلان، تُضاف لسعر الباقة.'] : leadService.value === 'meta-management' ? ['📊 *عمولة إدارة الإعلان:* 20% من ميزانية الإعلان بدون باقة.'] : []),
    `🌐 *رابط المتجر / الصفحة:* ${document.getElementById('leadLink').value.trim() || 'غير محدد'}`,
    `🎯 *نوع النشاط:* ${type.selectedOptions[0].textContent.trim()}`,
    ...(leadBudgetGroup.hidden ? [] : [`💰 *إنفاق الإعلان للمنصات (منفصل عن أتعاب الخدمة):* ${budget.selectedOptions[0].textContent.trim()}`]),
    '',
    'أنتظر تواصلكم لمناقشة خطة النمو 📈'
  ].join('\n');
  const url = `https://api.whatsapp.com/send?phone=201042472017&text=${encodeURIComponent(message)}`;
  whatsappFallback.href = url;
  whatsappFallback.hidden = false;
  formStatus.textContent = 'رسالتك جاهزة. أكمل إرسالها داخل واتساب. إذا لم يفتح، استخدم الرابط أدناه.';
  // Synchronous with the submit gesture. noopener protects the source tab;
  // the explicit link also works when a browser blocks or ignores this request.
  try {
    window.open(url, '_blank', 'noopener,noreferrer');
  } catch {
    formStatus.textContent = 'رسالتك جاهزة. تعذّر فتح نافذة جديدة، استخدم الرابط أدناه للمتابعة إلى واتساب.';
  }
});

// Optional, short entry motion. Nothing is hidden or dependent on an observer.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      if (typeof entry.target.animate === 'function') {
        entry.target.animate(
          [{ transform: 'translateY(15px)' }, { transform: 'translateY(0)' }],
          { duration: 550, easing: 'cubic-bezier(.2,.7,.2,1)' }
        );
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: .12 });
  document.querySelectorAll('.solution-card, .team-image, .testimonial-card').forEach(item => observer.observe(item));
}
