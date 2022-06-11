window.addEventListener('DOMContentLoaded', function(){
  const inputAvatar = document.querySelector('#input-avatar');
  const formContainer = document.querySelector('#form-container');

  formContainer.addEventListener('click', function(e){
    inputAvatar.click();

  })

  inputAvatar.addEventListener('change', () => {
    formContainer.submit();
  })
})