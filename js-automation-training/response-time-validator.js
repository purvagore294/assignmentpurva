let responseTime = 2.5;

console.log("===========Performance Test Report===============");
function nftStatusReport(responseTime){
if (responseTime < 3) {
    console.log("✅ Performance test PASSED (response time is: " +responseTime +"seconds)");
}
else{
    console.log("❌ Performance test FAILED (response time is : " +responseTime +"seconds)");
}
}
nftStatusReport(2.5);
nftStatusReport(3);
nftStatusReport(2.9999);
nftStatusReport(3.5);