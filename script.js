const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const buttonLogin = document.getElementById('login');
const buttonSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
function verificaEmailESenha() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', verificaEmailESenha);

// https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked
agreement.onchange = function enableDisable() {
  if (this.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
};

document.getElementById('textarea').addEventListener('input', (event) => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - Number(event.target.value.length);
});
