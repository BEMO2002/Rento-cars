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
document.getElementById('loginBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Basic validation
    if (!email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill in all fields',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }

    // Email validation  == regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter a valid email address',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        try {
            await Swal.fire({
                icon: 'success',
                title: 'Welcome Back!',
                text: 'Login successful!',
                timer: 1500,
                showConfirmButton: false,
                timerProgressBar: true
            });
            window.location.href = 'index.html';
        } catch (error) {
            console.error('Redirect failed:', error);
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'Invalid email or password',
            confirmButtonColor: '#FF6B6B'
        });
    }
});

// Handle Signup
document.getElementById('signupBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Basic validation
    if (!fullName || !email || !password || !confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill in all fields',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter a valid email address',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }

    // Password validation
    if (password.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Password must be at least 6 characters long',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Passwords do not match',
            confirmButtonColor: '#FF6B6B'
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
            confirmButtonColor: '#FF6B6B'
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

    try {
        await Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Account created successfully!',
            timer: 1500,
            showConfirmButton: false,
            timerProgressBar: true
        });
        
        // Clear form fields
        document.getElementById('fullName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
        document.getElementById('signupConfirmPassword').value = '';
        
        // Switch to login form
        showLogin();
    } catch (error) {
        console.error('Form switch failed:', error);
    }
});

// Check if user is already logged in
window.addEventListener('load', () => {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        window.location.href = 'index.html';
    }
});

// Add password toggle functionality
function setupPasswordToggles() {
    const togglePassword = (inputId, toggleId) => {
        const input = document.getElementById(inputId);
        const toggle = document.getElementById(toggleId);
        
        if (input && toggle) {
            toggle.addEventListener('click', () => {
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                toggle.classList.toggle('ri-eye-line');
                toggle.classList.toggle('ri-eye-off-line');
            });
        }
    };

    // Setup toggles for all password fields
    togglePassword('loginPassword', 'toggleLoginPassword');
    togglePassword('signupPassword', 'toggleSignupPassword');
    togglePassword('signupConfirmPassword', 'toggleSignupConfirmPassword');
}

// Initialize password toggles
document.addEventListener('DOMContentLoaded', setupPasswordToggles);






// const loginForm = document.getElementById('loginForm');
// const signupForm = document.getElementById('signupForm');
// const showSignupLink = document.getElementById('showSignup');
// const showLoginLink = document.getElementById('showLogin');

// // API Base URL (استبدلها بعنوان الـ API الخاص بك)
// const API_BASE_URL = 'https://your-api-url.com/api';

// // Show/Hide form functions
// function showSignup() {
//     loginForm.classList.add('hidden');
//     signupForm.classList.remove('hidden');
// }

// function showLogin() {
//     signupForm.classList.add('hidden');
//     loginForm.classList.remove('hidden');
// }

// // Event listeners for switching forms
// showSignupLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     showSignup();
// });

// showLoginLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     showLogin();
// });

// // Handle Login
// document.getElementById('loginBtn').addEventListener('click', async (e) => {
//     e.preventDefault();
//     const email = document.getElementById('loginEmail').value;
//     const password = document.getElementById('loginPassword').value;

//     // Basic validation
//     if (!email || !password) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Please fill in all fields',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Please enter a valid email address',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     try {
//         const response = await fetch(`${API_BASE_URL}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             // حفظ بيانات المستخدم أو التوكن في localStorage
//             localStorage.setItem('currentUser', JSON.stringify(data.user || { email }));
//             localStorage.setItem('token', data.token); // إذا كان الـ API يعيد توكن

//             await Swal.fire({
//                 icon: 'success',
//                 title: 'Welcome Back!',
//                 text: 'Login successful!',
//                 timer: 1500,
//                 showConfirmButton: false,
//                 timerProgressBar: true
//             });
//             window.location.href = 'index.html';
//         } else {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Access Denied',
//                 text: data.message || 'Invalid email or password',
//                 confirmButtonColor: '#FF6B6B'
//             });
//         }
//     } catch (error) {
//         console.error('Login failed:', error);
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Something went wrong. Please try again later.',
//             confirmButtonColor: '#FF6B6B'
//         });
//     }
// });

// // Handle Signup
// document.getElementById('signupBtn').addEventListener('click', async (e) => {
//     e.preventDefault();
//     const fullName = document.getElementById('fullName').value.trim();
//     const email = document.getElementById('signupEmail').value.trim();
//     const password = document.getElementById('signupPassword').value;
//     const confirmPassword = document.getElementById('signupConfirmPassword').value;

//     // Basic validation
//     if (!fullName || !email || !password || !confirmPassword) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Please fill in all fields',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Please enter a valid email address',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     if (password.length < 6) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Password must be at least 6 characters long',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     if (password !== confirmPassword) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Passwords do not match',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     try {
//         const response = await fetch(`${API_BASE_URL}/signup`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ fullName, email, password })
//         });

//         const data = await response.json();

//         if (response.ok) {
//             await Swal.fire({
//                 icon: 'success',
//                 title: 'Success!',
//                 text: 'Account created successfully!',
//                 timer: 1500,
//                 showConfirmButton: false,
//                 timerProgressBar: true
//             });

//             // Clear form fields
//             document.getElementById('fullName').value = '';
//             document.getElementById('signupEmail').value = '';
//             document.getElementById('signupPassword').value = '';
//             document.getElementById('signupConfirmPassword').value = '';

//             // Switch to login form
//             showLogin();
//         } else {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: data.message || 'Something went wrong',
//                 confirmButtonColor: '#FF6B6B'
//             });
//         }
//     } catch (error) {
//         console.error('Signup failed:', error);
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Something went wrong. Please try again later.',
//             confirmButtonColor: '#FF6B6B'
//         });
//     }
// });

// // Check if user is already logged in (using token or user data)
// window.addEventListener('load', () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         window.location.href = 'index.html';
//     }
// });

// // Add password toggle functionality
// function setupPasswordToggles() {
//     const togglePassword = (inputId, toggleId) => {
//         const input = document.getElementById(inputId);
//         const toggle = document.getElementById(toggleId);
        
//         if (input && toggle) {
//             toggle.addEventListener('click', () => {
//                 const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
//                 input.setAttribute('type', type);
//                 toggle.classList.toggle('ri-eye-line');
//                 toggle.classList.toggle('ri-eye-off-line');
//             });
//         }
//     };

//     togglePassword('loginPassword', 'toggleLoginPassword');
//     togglePassword('signupPassword', 'toggleSignupPassword');
//     togglePassword('signupConfirmPassword', 'toggleSignupConfirmPassword');
// }

// // Initialize password toggles
// document.addEventListener('DOMContentLoaded', setupPasswordToggles);