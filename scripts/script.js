document.querySelector('.js-sub-btn').addEventListener('click', ()=>{
  emailValidation();
});

const emailValidation = () =>{
  const email = document.querySelector('.js-email-input').value,
    invalidEmail = document.querySelector('.js-email-input'),
    emailLabel = document.querySelector('.invalid-email');

  if(email.match('@')){
    document.querySelector('.subscribed').classList.remove('js-success');
    document.querySelector('.subscribed').classList.remove('js-test');
    document.querySelector('.desktop-container').classList.add('js-desktop-container-hidden');
  }else{
    emailLabel.innerText = 'Valid email required';
    invalidEmail.classList.add('js-email-input-invalid');
  }

document.querySelector('.js-email-input').addEventListener('click', ()=>{
    emailLabel.innerText = '';
    invalidEmail.classList.remove('js-email-input-invalid');
  });
}
document.querySelector('.js-dismiss-message').addEventListener('click', () =>{
  document.querySelector('.subscribed').classList.add('js-success');
  document.querySelector('.subscribed').classList.add('js-test');
  document.querySelector('.desktop-container').classList.remove('js-desktop-container-hidden');
})