const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const buttonLogin = document.getElementById('login');

function verificaEmailESenha() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', verificaEmailESenha);
