const button = document.getElementById("submit");
const eName = document.getElementById('valid-username')
const ePassword = document.getElementById('valid-password')
const eEmail = document.getElementById('valid-email')
const cfPassword = document.getElementById('cf-password-error')


button.addEventListener('click', function() {

 var username = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 var password = document.getElementById('password').value;
 var cfpassword = document.getElementById('cf-password').value;
 var flag = true

 if (username.length < 6){
  flag = false;
  eName.classList.add('error-display');
 } else {
  eName.classList.remove('error-display')
 }


 if (email.length == 0){
  flag = false;
  eEmail.classList.add('error-display');
 } else {
  eEmail.classList.remove('error-display')
 }


 if (password.length < 8){
  flag = false;
  ePassword.classList.add('error-display');
 } else {
  ePassword.classList.remove('error-display')
 }


 if (cfpassword.length < 8){
  flag = false;
  cfPassword.classList.add('error-display')
  cfPassword.innerHTML = "Please enter your password again"
  }
  else if(cfpassword != password ){
  flag = false;
  cfPassword.innerHTML = "Password don't match"}
  else {
  cfPassword.classList.remove('error-display')
  }
  if(flag == true){
    window.location.href = './main.html';
  }
})