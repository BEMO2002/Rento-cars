// Get DOM elements

// const loginForm = document.getElementById('loginForm');
// const signupForm = document.getElementById('signupForm');
// const showSignupLink = document.getElementById('showSignup');
// const showLoginLink = document.getElementById('showLogin');

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

//     // Email validation  == regular expression
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

//     // Check if user exists in localStorage
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//         localStorage.setItem('currentUser', JSON.stringify(user));
        
//         try {
//             await Swal.fire({
//                 icon: 'success',
//                 title: 'Welcome Back!',
//                 text: 'Login successful!',
//                 timer: 1500,
//                 showConfirmButton: false,
//                 timerProgressBar: true
//             });
//             window.location.href = 'index.html';
//         } catch (error) {
//             console.error('Redirect failed:', error);
//         }
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Access Denied',
//             text: 'Invalid email or password',
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
//     // Email validation
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

//     // Password validation
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

//     // Get existing users or initialize empty array
//     const users = JSON.parse(localStorage.getItem('users') || '[]');

//     // Check if email already exists
//     if (users.some(user => user.email === email)) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Error',
//             text: 'Email already registered',
//             confirmButtonColor: '#FF6B6B'
//         });
//         return;
//     }

//     // Add new user
//     const newUser = { 
//         fullName,
//         email, 
//         password 
//     };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));

//     try {
//         await Swal.fire({
//             icon: 'success',
//             title: 'Success!',
//             text: 'Account created successfully!',
//             timer: 1500,
//             showConfirmButton: false,
//             timerProgressBar: true
//         });
        
//         // Clear form fields
//         document.getElementById('fullName').value = '';
//         document.getElementById('signupEmail').value = '';
//         document.getElementById('signupPassword').value = '';
//         document.getElementById('signupConfirmPassword').value = '';
        
//         // Switch to login form
//         showLogin();
//     } catch (error) {
//         console.error('Form switch failed:', error);
//     }
// });

// // Check if user is already logged in
// window.addEventListener('load', () => {
//     const currentUser = localStorage.getItem('currentUser');
//     if (currentUser) {
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

//     // Setup toggles for all password fields
//     togglePassword('loginPassword', 'toggleLoginPassword');
//     togglePassword('signupPassword', 'toggleSignupPassword');
//     togglePassword('signupConfirmPassword', 'toggleSignupConfirmPassword');
// }

// // Initialize password toggles
// document.addEventListener('DOMContentLoaded', setupPasswordToggles);






const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');

// API Base URL (استبدلها بعنوان الـ API الخاص بك)
const API_BASE_URL = 'https://rento.runasp.net/api';

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

    try {
        const response = await fetch(`${API_BASE_URL}/account/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            
            localStorage.setItem('currentUser', JSON.stringify(data.user || { email }));
            localStorage.setItem('token', data.token);
            await Swal.fire({
                icon: 'success',
                title: 'Welcome Back!',
                text: 'Login successful!',
                timer: 1500,
                showConfirmButton: false,
                timerProgressBar: true
            });
            window.location.href = 'index.html';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: data.message || 'Invalid email or password',
                confirmButtonColor: '#FF6B6B'
            });
        }
    } catch (error) {
        console.error('Login failed:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong. Please try again later.',
            confirmButtonColor: '#FF6B6B'
        });
    }
});

// Handle Signup
document.getElementById('signupBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    const firstName = document.getElementById('signupFirst').value.trim();
    const lastName = document.getElementById('signupLast').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const PhoneNumber = document.getElementById('signupNumber').value.trim();
    const password = document.getElementById('signupPassword').value;
    const userName = document.getElementById('signupUser').value;

    // Basic validation
    if (!firstName || !lastName ||  !email || !PhoneNumber ||!password || !userName) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill in all fields',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }

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

    if (password.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Password must be at least 6 characters long',
            confirmButtonColor: '#FF6B6B'
        });
        return;
    }


    try {
        const response = await fetch(`${API_BASE_URL}/account/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName,  email,  PhoneNumber, password ,userName  }),
            mode: 'cors'
        });

        const data = await response.json();

        if (response.ok) {
            await Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Account created successfully!',
                timer: 1500,
                showConfirmButton: false,
                timerProgressBar: true
            });

            showLogin();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: data.message || 'Something went wrong',
                confirmButtonColor: '#FF6B6B'
            });
        }
    } catch (error) {
        console.error('Signup failed:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong. Please try again later.',
            confirmButtonColor: '#FF6B6B'
        });
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

    togglePassword('loginPassword', 'toggleLoginPassword');
    togglePassword('signupPassword', 'toggleSignupPassword');
    togglePassword('signupConfirmPassword', 'toggleSignupConfirmPassword');
}

// Initialize password toggles
document.addEventListener('DOMContentLoaded', setupPasswordToggles);


// const API_BASE_URL = 'https://rento.runasp.net/api';
//             // Toggle between Login and Signup forms
//             document.getElementById("showSignup").addEventListener("click", function(e) {
//                 e.preventDefault();
//                 document.getElementById("loginForm").classList.add("hidden");
//                 document.getElementById("signupForm").classList.remove("hidden");
//             });
            
    
//             document.getElementById("showLogin").addEventListener("click", function(e) {
//                 e.preventDefault();
//                 document.getElementById("signupForm").classList.add("hidden");
//                 document.getElementById("loginForm").classList.remove("hidden");
//             });
    
//             // Login Form Validation and API Call
//             document.getElementById("loginBtn").addEventListener("click", async function(e) {
//                 e.preventDefault();
//                 let email = document.getElementById("loginEmail").value.trim();
//                 let password = document.getElementById("loginPassword").value;
//                 let emailError = document.getElementById("emailError");
//                 let passwordError = document.getElementById("passwordError");
    
//                 // Reset error messages
//                 emailError.classList.add("hidden");
//                 passwordError.classList.add("hidden");
    
//                 let isValid = true;
    
//                 // Validation
//                 if (!email || !/\S+@\S+\.\S+/.test(email)) {
//                     emailError.classList.remove("hidden");
//                     isValid = false;
//                 }
//                 if (!password || password.length < 6) {
//                     passwordError.classList.remove("hidden");
//                     isValid = false;
//                 }
    
//                 if (isValid) {
//                     try {
//                         const response = await fetch(`${API_BASE_URL}/account/login`, {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                             },
//                             body: JSON.stringify({
//                                 email: email,
//                                 password: password
//                             })
//                         });
    
//                         const data = await response.json();
//                         if (response.ok) {
//                             window.location.href = 'index.html';
//                             console.log("Token:", data.token);
//                         } else {
//                             alert("Login failed: " + (data.message || "Invalid credentials"));
//                         }
//                     } catch (error) {
//                         alert("Error connecting to the server: " + error.message);
//                     }
//                 }
//             });
    
//             // Signup Form Validation and API Call
//             document.getElementById("signupBtn").addEventListener("click", async function(e) {
//                 e.preventDefault();
//                 let firstName = document.getElementById("signupFirst").value.trim();
//                 let lastName = document.getElementById("signupLast").value.trim();
//                 let email = document.getElementById("signupEmail").value.trim();
//                 let phone = document.getElementById("signupNumber").value.trim();
//                 let username = document.getElementById("signupUser").value.trim();
//                 let password = document.getElementById("signupPassword").value;
    
//                 // Error elements (matching your original structure)
//                 let fullNameError = document.getElementById("fullNameError");
//                 let lastNameError = document.querySelector("#signupLast + span");
//                 let emailError = document.querySelector("#signupEmail + span");
//                 let phoneError = document.querySelector("#signupNumber + span");
//                 let userError = document.querySelector("#signupUser + span");
//                 let passwordError = document.getElementById("signupPasswordError");
    
//                 // Reset error messages
//                 fullNameError.classList.add("hidden");
//                 lastNameError.classList.add("hidden");
//                 emailError.classList.add("hidden");
//                 phoneError.classList.add("hidden");
//                 userError.classList.add("hidden");
//                 passwordError.classList.add("hidden");
    
//                 let isValid = true;
    
//                 // Validation
//                 if (!firstName || firstName.length < 2) {
//                     fullNameError.classList.remove("hidden");
//                     isValid = false;
//                 }
//                 if (!lastName || lastName.length < 2) {
//                     lastNameError.textContent = "Please enter your last name";
//                     lastNameError.classList.remove("hidden");
//                     isValid = false;
//                 }
//                 if (!email || !/\S+@\S+\.\S+/.test(email)) {
//                     emailError.classList.remove("hidden");
//                     isValid = false;
//                 }
//                 if (!phone || !/^\d{10,}$/.test(phone)) {
//                     phoneError.textContent = "Please enter a valid phone number";
//                     phoneError.classList.remove("hidden");
//                     isValid = false;
//                 }
//                 if (!username || username.length < 3) {
//                     userError.textContent = "Username must be at least 3 characters";
//                     userError.classList.remove("hidden");
//                     isValid = false;
//                 }
//                 if (!password || password.length < 6) {
//                     passwordError.classList.remove("hidden");
//                     isValid = false;
//                 }
    
//                 if (isValid) {
//                     try {
//                         const response = await fetch(`${API_BASE_URL}/account/register`, {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                             },
//                             body: JSON.stringify({
//                                 firstName: firstName,
//                                 lastName: lastName,
//                                 email: email,
//                                 phone: phone,
//                                 username: username,
//                                 password: password
//                             })
//                         });
    
//                         const data = await response.json();
//                         if (response.ok) {
//                             alert("Signup successful! Account created.");
//                             console.log("User ID:", data.userId);
//                         } else {
//                             alert("Signup failed: " + (data.message || "Something went wrong"));
//                         }
//                     } catch (error) {
//                         alert("Error connecting to the server: " + error.message);
//                     }
//                 }
//             });