/**
 * Origin Auth - Combined Scripts
 * Handled by Zero Bloat UI
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // --- SHARED UTILITIES ---
    
    // Real-time Validation UI Toggle
    function toggleValidationUI(input) {
        if (input.checkValidity()) {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        } else {
            if (input.value.length > 0) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            } else {
                input.classList.remove('is-valid', 'is-invalid');
            }
        }
    }

    // Generic Password Toggle Logic
    function setupPasswordToggle(toggleSelector, passwordSelector) {
        const toggleBtn = document.querySelector(toggleSelector);
        const passwordInput = document.querySelector(passwordSelector);
        
        if (toggleBtn && passwordInput) {
            const toggleIcon = toggleBtn.querySelector('i');
            toggleBtn.addEventListener('click', function () {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                if (toggleIcon) {
                    toggleIcon.classList.toggle('bi-eye-fill');
                    toggleIcon.classList.toggle('bi-eye-slash-fill');
                }
            });
        }
    }

    // --- LOGIN PAGE LOGIC ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        setupPasswordToggle('#togglePassword', '#password');
        
        const loginInputs = loginForm.querySelectorAll('.form-control');
        loginInputs.forEach(input => {
            input.addEventListener('input', () => toggleValidationUI(input));
            input.addEventListener('blur', () => toggleValidationUI(input));
        });

        loginForm.addEventListener('submit', function (event) {
            if (!loginForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                loginInputs.forEach(input => {
                    if (!input.checkValidity()) {
                        input.classList.add('is-invalid');
                        input.classList.remove('is-valid');
                    }
                });
            }
        }, false);
    }

    // --- REGISTRATION PAGE LOGIC ---
    const regForm = document.getElementById('regForm');
    if (regForm) {
        setupPasswordToggle('#togglePassword', '#password');
        
        const passInput = document.getElementById('password');
        const strengthBar = document.getElementById('strengthBar');
        const regInputs = regForm.querySelectorAll('.form-control, .form-check-input');

        // Password Strength Meter
        if (passInput && strengthBar) {
            passInput.addEventListener('input', function() {
                const val = passInput.value;
                let strength = 0;
                if (val.length > 5) strength += 20;
                if (val.length > 8) strength += 20;
                if (/[A-Z]/.test(val)) strength += 20;
                if (/[0-9]/.test(val)) strength += 20;
                if (/[^A-Za-z0-9]/.test(val)) strength += 20;

                strengthBar.style.width = strength + '%';
                if (strength < 40) strengthBar.style.background = '#ef4444'; 
                else if (strength < 80) strengthBar.style.background = '#f59e0b'; 
                else strengthBar.style.background = '#10b981';
            });
        }

        regInputs.forEach(input => {
            input.addEventListener('input', () => toggleValidationUI(input));
            input.addEventListener('blur', () => toggleValidationUI(input));
        });

        regForm.addEventListener('submit', function (event) {
            if (!regForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
                regInputs.forEach(input => {
                    if (!input.checkValidity()) {
                        input.classList.add('is-invalid');
                        input.classList.remove('is-valid');
                    }
                });
            }
        }, false);
    }
});