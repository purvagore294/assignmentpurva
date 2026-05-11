function configureTest(testName, browser = "Chrome", timeout  = 30000, environment = "Staging") {
   console.log ("Test is: " +testName);
   console.log ("Browser is: " +browser);
   console.log ("Timeout : " +timeout +"ms");
   console.log ("Environment is: " +environment);
   console.log ("========");
}
configureTest("Sample Test1");
configureTest("Login Test with FireFox", "Firefox");
configureTest("Login Test with Safari", "Safari", 60000);
configureTest("Login Test with Edge", "Edge", 30000, "SIT");
configureTest("Edge Case1", "");
configureTest("Edge Case2", undefined); 