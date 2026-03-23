/* ─────────────────────────────────────────
   CONTACT.JS
   – Client-side form validation
   – Async Formspree submission
   – Friendly status messages
   ───────────────────────────────────────── */

(function () {
  'use strict';

  var form   = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var submit = document.getElementById('form-submit');

  if (!form || !status || !submit) return;

  /* ── Validation helpers ──────────────── */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function isEmpty(value) {
    return value.trim().length === 0;
  }

  function showStatus(message, type) {
    status.textContent = message;
    status.className = 'form-status ' + type;
  }

  function clearStatus() {
    status.textContent = '';
    status.className = 'form-status';
  }

  /* ── Inline field error on blur ──────── */
  form.querySelectorAll('.form-input, .form-textarea').forEach(function (field) {
    field.addEventListener('blur', function () {
      validateField(field);
    });
    field.addEventListener('input', function () {
      // Clear error as soon as user types
      field.style.borderBottomColor = '';
    });
  });

  function validateField(field) {
    var valid = true;
    if (isEmpty(field.value)) {
      valid = false;
    } else if (field.type === 'email' && !isValidEmail(field.value)) {
      valid = false;
    }
    field.style.borderBottomColor = valid ? '' : 'rgba(196, 144, 144, 0.7)';
    return valid;
  }

  /* ── Form submit ─────────────────────── */
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    clearStatus();

    var nameField    = form.querySelector('#form-name');
    var emailField   = form.querySelector('#form-email');
    var messageField = form.querySelector('#form-message');

    // Validate all fields
    var valid =
      validateField(nameField) &
      validateField(emailField) &
      validateField(messageField);

    if (!valid) {
      showStatus('Please fill in all fields correctly.', 'error');
      return;
    }

    // Disable submit during request
    submit.disabled = true;
    submit.textContent = 'Sending\u2026';

    try {
      var response = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        showStatus('Thank you — your message has been sent. I will be in touch shortly.', 'success');
      } else {
        var data = await response.json().catch(function () { return {}; });
        var msg = (data.errors && data.errors.map(function (err) { return err.message; }).join(', '))
          || 'Something went wrong. Please try emailing directly.';
        showStatus(msg, 'error');
      }
    } catch (err) {
      showStatus('Network error. Please try again or email directly.', 'error');
    } finally {
      submit.disabled = false;
      submit.textContent = 'Send Message';
    }
  });

}());
