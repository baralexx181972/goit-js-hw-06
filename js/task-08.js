const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = {
    email: event.currentTarget.elements.email.value,
    pass: event.currentTarget.elements.password.value,
  };
  //   console.log(formData);

  if (formData.email === '' || formData.pass === '') {
    alert('Все поля должны быть заполнены!');
  } else {
    console.log(formData);
    //   console.log('pass', value);
    form.reset();
  }
}
