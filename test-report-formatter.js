let testName = "Login Test Suite for Amazaon e-Com site";
let validCredential = true;
let balnkCheck = "";
let validMobileNum = true;
let testCount = 0;
let passCount = 0;
let failCount = 0;
console.log("==========================================");
console.log(testName);
console.log("==========================================");

console.log("Test 1: Login with valid credentials");
testCount++;
if (validCredential){
    console.log("Status : Passed");
    passCount++;
}
else{
    console.log("Status : Failed");
    failCount++;
}

console.log("Test 2: Login with Invalid credentials");
testCount++;
if (!validCredential){
    console.log("Status : Passed");
    passCount++;
}
else{
    console.log("Status : Failed");
    failCount++;
}

console.log("Test 3: Login with Blank credentials");
testCount++;
if (validCredential === balnkCheck){
    console.log("Status : Passed");
    passCount++;
}
else {
    console.log("Status : Failed");
    failCount++;
}

console.log("Test 4: Login with Mobile Number");
testCount++;
if (validMobileNum){
    console.log("Status : Passed");
    passCount++;
}
else{
    console.log("Status : Failed");
    failCount++;
}

console.log("Test 5: Login with invalid Mobile Number");
testCount++;

let isvalidMobileNum = "abs89"
if (isvalidMobileNum === Number){
    console.log("Status : Passed");
    passCount++;
}
else{
    console.log("Status : Failed");
    failCount++;
}

console.log("==========================================");
console.log("TEST SUMMARY");
console.log("==========================================");

console.log("Total Test cases executed: " + testCount);
console.log("Total Pass Count: " + passCount);
console.log("Total Fail Count: " + failCount);
console.log("==========================================");