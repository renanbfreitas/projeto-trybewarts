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

const obs = document.getElementById('textarea');
document.getElementById('textarea').addEventListener('input', () => {
  const textArea = document.getElementById('textarea');
  const maxTamanho = 500;
  pCont.innerText = maxTamanho - textArea.value.length;
});

const form = document.getElementById('form-data');
btnEnviar.addEventListener('click', (e) => {
  append(form, `Nome: ${nome.value} ${sobrenome.value}`);
  append(form, `Email: ${email.value}`);
  append(form, `Casa: ${casa.value}`);
  append(form, `Família: ${elementoRadio(família)}`);
  append(form, `Matérias: ${checkends(content)}`);
  append(form, `Avaliação: ${elementoRadio(nota)}`);
  append(form, `Observações: ${obs.value}`);

  console.log(nome.value, sobreNome.value);
  form.style.display = 'none'
  e.preventDefault();
});
