//## Exercise 1: Age Range Validation
let age;
function ageCheck(age){
if (age >= 18 && age <= 65) {
  console.log("✅ Valid age range (18-65) & mentioned age is :" +age);
} else {
  console.log("❌ Age must be between 18 and 65 & mentioned age is :" +age);
}
}
ageCheck(18);
ageCheck(17);
ageCheck(65);
ageCheck(66);
ageCheck(25);