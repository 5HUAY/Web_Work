function initContactForm() {
  const form = document.querySelector('#contact-form');
  const key = 'contactDraft';

  if (!form) return;

  const nameInput = form.querySelector('[name="name"]');
  const emailInput = form.querySelector('[name="email"]');
  const messageInput = form.querySelector('[name="message"]');

  // Відновлення чернетки
  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  Object.keys(saved).forEach(k => {
    if (form.elements[k]) {
      form.elements[k].value = saved[k];
    }
  });

  // Збереження чернетки
  form.addEventListener('input', () => {
    const data = Object.fromEntries(new FormData(form).entries());
    localStorage.setItem(key, JSON.stringify(data));
  });

  // Валідація
  function validate() {
    let valid = true;

    if (nameInput.value.length < 2) {
      valid = false;
    }

    if (!emailInput.value.includes('@')) {
      valid = false;
    }

    if (!messageInput.value.trim()) {
      valid = false;
    }

    return valid;
  }

  // 🔹 Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validate()) {
      alert('Перевірте дані!');
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    console.log('Відправлено:', data);

    localStorage.removeItem(key);
    form.reset();
  });
}