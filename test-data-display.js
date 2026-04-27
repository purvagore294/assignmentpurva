let userName;
let email;
let passWord;
let count = 1;
console.log("User Details as below : \n ");
function userInfo(userName,email,passWord)
{
 console.log("User: " +count++);
 console.log("User Name: " +userName);
 console.log("Email: " +email);
 console.log("Password: " +passWord + "\n");
}
userInfo("Purva","purva@test.com","test111");
userInfo("Preeti","preeti@test.com","test222");
userInfo("Prashant","Prashant@test.com","test333");
console.log("Test data generation complete!");