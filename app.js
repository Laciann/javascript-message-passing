(function () {

  const form = document.getElementById('msg-form');

  form.addEventListener('submit', (event) => {
    //prevent default
    event.preventDefault();

    //get msg value
    const message = document.getElementById('msg-input');
    const value = message.value;

    //checking for empty value
    if (value === '') {
      const feedback = document.querySelector('.feedback');
      feedback.classList.remove('hide');
      //display error for 2 seconds
      setTimeout(() => feedback.classList.add('hide'), 2000);
    } else {
      //pass the msg value
      document.querySelector('h1.display-msg').textContent = value;
      message.value = '';
    }
  });
})();