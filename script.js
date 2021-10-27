const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('passwordCheck');

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

const checkInputs = () => {
  const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
  
  if (usernameValue === ''){
    setError(username, 'Username can\'t be blank');
  } else {
    setSuccess(username);
  }
  
  if (emailValue === ''){
    setError(email, 'Email can\'t be blank');
  } else if (!isEmail(emailValue)) {
    setError(email, 'Email is not valid');
  } else {
    setSuccess(email);
  }
  
  if (passwordValue === ''){
    setError(password, 'Password can\'t be blank');
  } else if (!isPassword(passwordValue)) {
    setError(password, 'Password too weak');
  } else {
    setSuccess(password);
  }
  
  if (password2Value === ''){
    setError(password2, 'Password Check can\'t be blank');
  } else if (password2Value !== passwordValue) {
    setError(password2, 'Password doesn\'t match');
  } else {
    setSuccess(password2);
  }
}

const setError = (input, message) => {
  const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

const setSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const isEmail = (emails) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emails);
}

const isPassword = (passwords) => {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/.test(passwords);
}