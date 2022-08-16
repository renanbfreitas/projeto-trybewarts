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

document.getElementById('textarea')
  .addEventListener('input', (event) => {
    const counter = document.getElementById('counter');
    counter.innerText = 500 - Number(event.target.value.length);
  });

const nome = document.querySelector('.nome');
const sobrenome = document.querySelector('.sobrenome');
const email = document.querySelector('.email');
const house = document.querySelector('#house');
const radio = document.querySelectorAll('.radio');

const checkedRadio = () => {
  for (let j = 0; j < radio.length; j += 1) {
    if (radio[j].checked) {
      return radio[j].value;
    }
  }
};
const subject = document.querySelectorAll('.subject');
const checkedCheck = () => {
  const arraySubject = [];
  for (let i = 0; i < subject.length; i += 1) {
    if (subject[i].checked) {
      arraySubject.push(subject[i].value);
    }
  }
  return arraySubject.join(', ');
};
const avaliacao = document.querySelectorAll('.avalicao');
const radioCheck = () => {
  for (let i = 0; i < avaliacao.length; i += 1) {
    if (avaliacao[i].checked) {
      return avaliacao[i].value;
    }
  }
};
const form = document.querySelector('#evaluation-form');
const createList = () => {
  const textarea = document.querySelector('#textarea');
  const formdata = document.querySelector('#form-data');
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `Nome: ${nome.value} ${sobrenome.value}
  Email: ${email.value}
  Casa: ${house.value}
  Família: ${checkedRadio()}
  Matérias: ${checkedCheck()}
  Avaliação: ${radioCheck()}
  Observações: ${textarea.value}`;
  formdata.appendChild(paragrafo);
};

buttonSubmit.addEventListener('click', (evt) => {
  evt.preventDefault();
  form.style.display = 'none';
});
buttonSubmit.addEventListener('click', createList);
