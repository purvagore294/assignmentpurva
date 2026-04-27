//let testName = "Login Test Suite for Amazaon e-Com site";
let testStatus = "Passed";
let errorCount = 0;
let passCount = 0;
let failCount = 0;

console.log("===========Test Status Report===============");
function testStatusReport(testStatus,errorCount){
if ((testStatus === "PASSED" || testStatus === "SKIPPED") && errorCount === 0){
    console.log("✅ Test completed successfully");
    passCount++;
}
else{
    console.log("❌ Test has issues");
    failCount++;
    errorCount++;
}
}
testStatusReport("PASSED",0);
testStatusReport("SKIPPED",0);
testStatusReport("PASSED",2);
testStatusReport("FAILED",0);
testStatusReport("PASSED","0");
console.log("Total Pass Count: " + passCount);
console.log("Total Fail Count: " + failCount);
console.log("==========================================");