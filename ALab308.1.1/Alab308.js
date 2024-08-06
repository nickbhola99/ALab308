// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.

const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50);
// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)
// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


//Lab Part 1
const isDivisible = (n1%5) > 0 && (n2%5) > 0 && (n3%5) > 0 &&(n4%5) > 0;
console.log(isDivisible);

const isLarger = n4 > n1;
console.log(isLarger);

const chain = ((n2 - n1) * n3) % n4;
console.log(chain);

const isOver25True = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isOver25True)

//Lab Part 2
  
const maxtotalFuel = 1500 / 23;
console.log("Fuel Consumption at 75 mph: " + maxtotalFuel);
const maxBudget = maxtotalFuel * 3;
console.log("Costs: " + maxBudget);
const minTime = 1500 / 75;
console.log("Time at 75 miles per hour: " + minTime);

const mintotalFuel = 1500 / 30;
console.log("Fuel Consumption at 55 mph: " +mintotalFuel)
const minBudget = mintotalFuel * 3;
console.log("Costs: " + minBudget);
const maxTime = 1500 / 55;
console.log("Time at 55 miles per hour: " + maxTime);

const midtotalFuel = 1500 / 28;
console.log("Fuel Consumption at 60 mph: " +midtotalFuel);
const midBudget = midtotalFuel * 3;
console.log("Costs: " + midBudget);
const midTime = 1500 / 60;
console.log("Time at 60 miles per hour: " + midTime);

console.log("Drive at 60 mph. You'll save more money and arrive at the destination faster. Driving at 75 mph isn't even affordable.");