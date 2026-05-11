function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

console.log(validateEmail("test@example.com"));  // VALID
console.log(validateEmail("notanemail"));         // INVALID
console.log(validateEmail("notan@email")); 
