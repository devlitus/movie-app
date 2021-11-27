import {loginUser, loginGoogle} from './services/login.js';

// const form = document.getElementById('form').elements;
const btn = document.getElementById('btn');
const btnGoogle = document.querySelector('.btn-google');


btn.addEventListener('click', async (e) => {
  try {
    e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const user = await loginUser(emailInput, password);
    const {email} = user.user;
    if (email === 'test@test.com') {
      Swal.fire({
        title: 'Welcome',
        icon: 'success',
      }).then(() => {
        window.location.href = './movie.html';
      });
    }
  } catch (error) {
    console.log(error);
  }
}, false);

btnGoogle.addEventListener('click', (e) => {
  try {
    e.preventDefault();
    loginGoogle();
  } catch (error) {
    console.log(error);
  }
});
