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
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            // Check if email format is correct
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Proceed to redirect
            window.location.href = "home1.html"; 
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            window.location.href = "home1.html"; 
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            window.location.href = "index.html"; 
        });
    }
});
