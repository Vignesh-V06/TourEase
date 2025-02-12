document.addEventListener('DOMContentLoaded', function () {
    const btnPopup = document.querySelector('.btnLogin-popup');
    const coverBox = document.querySelector('.cover_box');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const iconClose = document.querySelector('.icon-close');

    function activateCoverBox() {
        coverBox.classList.add('active');
    }
    function deactivateCoverBox() {
        coverBox.classList.remove('active');
    }
    function activatePopup() {
        coverBox.classList.add('active-popup');
    }
    function deactivateCoverPopup() {
        coverBox.classList.remove('active-popup');
    }

    registerLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        activateCoverBox();
    });

    loginLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        deactivateCoverBox();
    });

    btnPopup.addEventListener('click', (e) => {
        e.preventDefault(); 
        activatePopup();
    });

    iconClose.addEventListener('click', deactivateCoverPopup);
});
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact-section");
    const checkbox = document.querySelector(".contact-form input[type='checkbox']");

    if (contactSection) {
        setTimeout(() => {
            contactSection.classList.add("show");
            
            // Ensure checkbox fades in properly
            if (checkbox) {
                checkbox.style.opacity = "1";
                checkbox.style.transform = "scale(1)";
            }
        }, 100);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".form-box.login form");
    const registerForm = document.querySelector(".form-box.register form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // 🚫 Prevent form submission

            const emailField = loginForm.querySelector("input[type='email']");
            const passwordField = loginForm.querySelector("input[type='password']");

            if (!emailField || !passwordField) {
                alert("Email or Password field is missing.");
                return;
            }

            const email = emailField.value.trim();
            const password = passwordField.value.trim();

            // Email validation
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            // ✅ If validation passes, redirect
            alert("Login successful!");
            window.location.href = "home1.html";
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Registered successfully!");
            window.location.href = "home1.html";
        });
    }
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            window.location.href = "index.html"; // Redirect to Login Page
        });
    }
});
