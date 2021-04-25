// Assignment Code
var generateBtn = document.querySelector("#generate");


//let user determine password criteria
function criteriaCheck() {

  /* prompt the user for length of password, must be min 8 chars and max 128 */
  var lengthCheck = prompt("How many characters would you like your password to be? Enter a value.", "0")
  var convertedtoNum  = parseInt(lengthCheck)

  if  
  (
    convertedtoNum < 8
  ) 
    {
      window.alert("Must have at least 8 characters and no more than 128 characters");
      return;
    }

    if  
    (
      convertedtoNum > 128
    ) 
      {
        window.alert("Must have at least 8 characters and no more than 128 characters");
        return;
      }

    if  
    (
      isNaN(convertedtoNum) 
    ) 
      {
        window. alert("Must enter a number");
        return;
      }
  

    /* prompt the user for lowercase */
  var lowercaseconfirm = confirm("Would you like your password to include lowercase characters?")

  /* prompt the user for uppercase */
  var uppercaseconfirm = confirm("Would you like your password to include uppercase characters?")

  /* prompt the user for numeric */
  var numericconfirm = confirm("Would you like your password to include numbers?")

  /* prompt the user for special chars */
  var specialcharconfirm = confirm("Would you like your password to include special characters?")



  
    /* make sure the user selects at least 1 character type
if lowercaseconfirm === false && lowercaseconfirm === false &&   lowercaseconfirm === false
then display "User must select at least 1 character type" else follow the function below  of creating the password  */
   if
    (
      lowercaseconfirm   === false && 
      uppercaseconfirm   === false &&   
      numericconfirm     === false &&
      specialcharconfirm === false
    ) 
      {
        window.alert("Must select at least one character type");
        return;
      }
  
    //create random string
      function randomString(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      }
    
    //determine how long the password is
      var rString = randomString(convertedtoNum, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
      var password = rString;
    
    //store generated password inside the password box
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
}


  


/* Write password to the #password input
  function writepassword {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }
 */  







// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



//run password generator when you clik the button
generateBtn.addEventListener("click", criteriaCheck);
