function validateFormNested(username, password, age) {
    if (username !== "") {
        if (password.length >= 8) {
            if (age >= 18) {
                console.log ("Nested:✅ Form is valid");
            } else {
                console.log ("Nested :❌ Must be 18 or older");
            }
        } else {
            console.log ("Nested:❌ Password must be at least 8 characters");
        }
    } else {
        console.log ("Nested : ❌ Username is required");
    }
}

function validateFormGuard(username, password, age) {
    if(!username){
        console.log ("Guard :❌ Username is required");
        return;
    }
    if(password.length < 8){
        console.log ("Guard :❌ Password must be at least 8 characters");
        return;
    }
    if (age < 18) {
                console.log ("Guard: ❌ Must be 18 or older");
                return;
            }
    console.log ("Guard :✅ Form is valid");
    return;
}
validateFormGuard("","Test@123",25); //E-Username is required
validateFormNested("","Test@123",25); //E-Username is required
validateFormGuard("john", "abc", 25); // Password too short
validateFormNested("john", "abc", 25); // Password too short

validateFormGuard("john", "Test@123", 16); // Must be 18+
validateFormNested("john", "Test@123", 16); // Must be 18+
validateFormGuard("john", "Test@123", 25); // valid
validateFormNested("john", "Test@123", 25); // valid