/*- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean) */

let totalCount = 0;
let passTestCaseCount = 0;
let failTestCaseCount = 0;
let testSuitName = "RegressionTest";
let final_result;
let testStatus;

function checkTestResult(testStatus)
{
if (testStatus === "PASSED") {
  console.log("✅ Test case Passed");
  passTestCaseCount++;
  totalCount++;
} else {
  console.log("❌ Test case Failed");
  failTestCaseCount++;
  totalCount++;
}
}

checkTestResult("PASSED");
checkTestResult("PASSED");
checkTestResult("Failed");

console.log("Test Execution Metrix for : " +testSuitName);
console.log("Total Test cases executed :" +totalCount);
console.log("Passed Count: " +passTestCaseCount);
console.log("Failed Count: " +failTestCaseCount);
let passRate = (passTestCaseCount/totalCount)*100;
console.log("Pass Rate: " +passRate +"%");

if (failTestCaseCount === 0) {
    final_result = true;
console.log("All Test Pass : " +final_result);
} else {
  final_result = false;
  console.log("All Test Pass : " +final_result);
}