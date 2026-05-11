const hasMinLength = function (password) {
return password.length > 8; 
};

const hasSpecialChar = function (email) {
  return email.includes(("@" && "!") || "#");
};

const hasUppercase = function(password){
    let temp =  /[A-Z]/.test(password);
    return temp;
} 

const passwordValidators = [hasMinLength, hasSpecialChar, hasUppercase];
//console.log(passwordValidators);

function validatePassword(password)
{
    for (let i = 0; i < password.length; i++) {
  if (!passwordValidators[i](password)) {
    console.log(`Password Validator '${i + 1}:` + passwordValidators[i](password));
  }
  else {
  console.log("✗ Failed check : "+passwordValidators[i](password));
  break;
  }
}
console.log("Given Password is valid");
}
//Test with `"Test@123"` (should pass all) and `"weak"` (should fail)

validatePassword("Test@1wewewewewewewe23");