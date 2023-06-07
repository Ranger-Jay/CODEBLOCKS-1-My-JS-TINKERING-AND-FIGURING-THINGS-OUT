// FUNCTION DECLARATION
//can be called before defined in code
// A simple function to calculate birth years, and years until retirement tinkering with different types of functions, including expressions and arrows

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);

//FUNCTION EXPRESSION
// more structured
const calcAge2 = function (birthYear) {
  return 2040 - birthYear;
};
//FUNCTION EXPRESSION
const calcAge2 = function (birthYear) {
  return 2040 - birthYear;
};

const age2 = calcAge2(1990);

//Arrow FUNCTION
// returns happen implicitely, so no need for return
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
// console.log(age1, age2);
console.log(age3);

const yearsUntilRetriement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
  // return retirement;
};
//return needed for more than 1 perameter
console.log(yearsUntilRetriement(1990, "Jay"));
console.log(yearsUntilRetriement(1980, "Bob"));
