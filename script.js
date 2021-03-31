// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = document.querySelector("#password");
  var length = 8;
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  

  for (var i = 0; i < length ; i++) {
      password += charset.charAt(Math.floor(Math.random() * length));
  
  
  passwordText.value = password;
  }
  return password;
  
}
 console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);