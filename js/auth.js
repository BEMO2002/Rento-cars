// Get DOM elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');

// Show/Hide form functions
function showSignup() {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
}

function showLogin() {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
}

// Event listeners for switching forms
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    showSignup();
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

// Handle Login
document.getElementById('loginBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (!email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill in all fields',
            confirmButtonColor: '#FF6B6B',
            customClass: {
                confirmButton: 'px-4 py-2 rounded-lg'
            }
        });
        return;
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store logged in user
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Login successful!',
            timer: 1000,
            showConfirmButton: false
        }).then(() => {
            // Redirect to home page
            window.location.href = 'index.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Invalid email or password'
        });
    }
});

// Handle Signup
document.getElementById('signupBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please fill in all fields',
            confirmButtonText: 'OK',
            confirmButtonColor: '#FF6B6B',
            customClass: {
                confirmButton: 'px-4 py-2 rounded-lg'
            }
        });
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Passwords do not match',
            confirmButtonColor: '#FF6B6B',
            customClass: {
                confirmButton: 'px-4 py-2 rounded-lg'
            }
        });
        return;
    }

    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    if (users.some(user => user.email === email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email already registered',
            confirmButtonColor: '#FF6B6B',
            customClass: {
                confirmButton: 'px-4 py-2 rounded-lg'
            }
        });
        return;
    }

    // Add new user
    const newUser = { 
        fullName,
        email, 
        password 
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Account created successfully!',
        timer: 1500,
        showConfirmButton: false
    }).then(() => {
        // Switch to login form
        showLogin();
    });
});

// Check if user is already logged in
window.addEventListener('load', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'index.html';
    }
});

// Login form validation
document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // Reset errors
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');
    
    let isValid = true;
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
        emailError.classList.remove('hidden');
        isValid = false;
    }
    
    // Password validation
    if (!password.value || password.value.length < 6) {
        passwordError.classList.remove('hidden');
        isValid = false;
    }
    
    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Validation passed successfully',
        });
    }
});
// Update signup form validation
document.getElementById('signupBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('signupEmail');
    const password = document.getElementById('signupPassword');
    const confirmPassword = document.getElementById('signupConfirmPassword');
    
    // Reset all error messages
    document.querySelectorAll('#signupForm .text-red-500').forEach(error => {
        error.classList.add('hidden');
    });
    
    let isValid = true;
    
    // Validate fields
    if (!fullName.value.trim()) {
        document.getElementById('fullNameError').classList.remove('hidden');
        isValid = false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value || !emailPattern.test(email.value)) {
        document.getElementById('signupEmailError').classList.remove('hidden');
        isValid = false;
    }
    
    if (!password.value || password.value.length < 6) {
        document.getElementById('signupPasswordError').classList.remove('hidden');
        isValid = false;
    }
    
    if (password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').classList.remove('hidden');
        isValid = false;
    }
    
    if (isValid) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Account created successfully',
        });
    }
});