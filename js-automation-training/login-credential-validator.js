let userName;
let passWord;
let email;

console.log("Validating Credentials : ");

function checkCredentials(userName,passWord,email){
if ((userName !== "" && passWord !== "") || email !== "") {
  console.log("✅ Sufficient login credentials");
} else {
      console.log("❌ Insufficient credentials - provide username+password OR email");
  }
}
checkCredentials("TestUser1","pwd1234","");
checkCredentials("TestUser1","","");
checkCredentials("","","");
checkCredentials("","","test@gmail.com");