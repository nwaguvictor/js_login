///////// Add even handlers /////////////

const loginForm = document.querySelector('#loginForm');  
const regForm = document.querySelector('#registrationForm');

// Hide the registration form on page load
window.addEventListener('load', () => regForm.style.display = 'none');

document.querySelector('#regBtn').addEventListener('click', showRegForm);
document.querySelector('#loginBtn').addEventListener('click', showLoginForm);

regForm.addEventListener('submit', signUp);
loginForm.addEventListener('submit', signIn);

///////// Event handler callbacks /////////////////

// Sign in
function signIn(event) {
  event.preventDefault();
  // Load local Storage data
  const dbEmail = window.localStorage.getItem('email');
  const dbPassword = window.localStorage.getItem('password');

  if (!dbEmail || !dbPassword) {
    alert('No email or password found!');
    return false;
  }

  // Form data
  const email = document.querySelector('#userEmail').value;
  const password = document.querySelector('#userPassword').value;

  if (email !== dbEmail && password !== dbPassword) {
    alert('Email or password not match');
    return false;
  }

  // Otherwise
  window.localStorage.setItem('loggedIn', true);
  window.location.replace('home.html');

}

// Registering users (sign up)
function signUp(event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name').value
  const emailInput = document.querySelector('#regEmail').value;
  const passwordInput = document.querySelector('#regPassword').value;

  const dbEmail = window.localStorage.getItem('email');

  // Check if user already registered!
  if (emailInput === dbEmail) {
    alert('Email Already exist!');
    return false;
  }
  
  const database = window.localStorage;
  database.setItem('name', nameInput);
  database.setItem('email', emailInput);
  database.setItem('password', passwordInput);
  database.setItem('loggedIn', true);

  window.location.replace('home.html');
}

function showLoginForm(event) {
  event.preventDefault();
  loginForm.style.display = ''
  regForm.style.display = 'none';
}

function showRegForm(event) {
  event.preventDefault();
  regForm.style.display = '';
  loginForm.style.display = 'none';    
}