// Mock database for demonstration
const mockDatabase = {};

// Elements
const loginFormWrapper = document.getElementById('loginFormWrapper');
const signupFormWrapper = document.getElementById('signupFormWrapper');
const loginErrorMessage = document.getElementById('loginErrorMessage');
const signupErrorMessage = document.getElementById('signupErrorMessage');
const showSignupForm = document.getElementById('showSignupForm');
const showLoginForm = document.getElementById('showLoginForm');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Switch between forms
showSignupForm.addEventListener('click', () => {
    loginFormWrapper.style.display = 'none';
    signupFormWrapper.style.display = 'block';
    loginErrorMessage.textContent = '';
});

showLoginForm.addEventListener('click', () => {
    signupFormWrapper.style.display = 'none';
    loginFormWrapper.style.display = 'block';
    signupErrorMessage.textContent = '';
});

// Password validation criteria
const isPasswordValid = (password) => {
    const criteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return criteria.test(password);
};

// Email validation
const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Signup form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;

    if (!isEmailValid(email)) {
        signupErrorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (!isPasswordValid(password)) {
        signupErrorMessage.textContent =
            'Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.';
        return;
    }

    if (mockDatabase[username]) {
        signupErrorMessage.textContent = 'Username already exists. Please choose another.';
        return;
    }

    // Save the user in the mock database
    mockDatabase[username] = { email, password };
    alert('Signup successful! You can now login.');
    signupForm.reset();
    signupFormWrapper.style.display = 'none';
    loginFormWrapper.style.display = 'block';
});

// Login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (mockDatabase[username] && mockDatabase[username].password === password) {
        alert('Login successful!');
        loginForm.reset();
        loginErrorMessage.textContent = '';
        window.location.href = 'index.html';
    } else {
        loginErrorMessage.textContent = 'Invalid username or password.';
    }
});
