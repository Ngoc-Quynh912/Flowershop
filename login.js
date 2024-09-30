const button = document.getElementById("submit");
const eName = document.getElementById('valid-username');
const ePassword = document.getElementById('valid-password');

button.addEventListener('click', function() {
  var flag = true

  var username = document.getElementById('name').value;
  var password = document.getElementById('password').value;
 
  if (username.length == 0){
  flag = false;
  eName.classList.add('error-display');
  } else {
   eName.classList.remove('error-display')
  }

  
  if (password.length == 0){
    flag = false;
    ePassword.classList.add('error-display');
  } 
    else if(password != "12345" && password.length != 0) {
    ePassword.classList.add('error-display');
    ePassword.innerHTML = "The password isn't correct"
    flag = false;
  }
   else {
   ePassword.classList.remove('error-display')
  } 

  if(flag == true){
    window.location.href = './main.html';
}

})