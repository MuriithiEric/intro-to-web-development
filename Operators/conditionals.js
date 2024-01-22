// if
// if - else
// if else if
// switch case

// if (10 < 5) {
//   console.log("True!");
// } else {
//   console.log("False");
// }

// var age = 21;

// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You can't vote");
// }

var age = 16;
var hasDriversLicense = false;

if (age >= 18) {
  console.log("You can vote!");

  if (hasDriversLicense) {
    console.log("You can also drive!");
  } else {
    console.log("You are eligible to vote but not to drive!");
  }
} else {
  console.log("You can't drive and you can't vote");
}
