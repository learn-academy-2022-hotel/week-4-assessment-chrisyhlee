// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { notStrictEqual } = require("assert")
const { join } = require("path")
const { boolean } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// PSEUDOCODE
// create fxn called randomizer that takes in an array and removes the first item, then shuffles the remaining contents
// input: array
// output: array without first item, shuffled
// use slice to remove first index of received array
// loop through array from back to front
// assign random number to variable
// assign current index to random number index

describe ('randomizer', () => {
  const expectedArr = ['yellow', 'blue', 'pink', 'green']
  const expectedArr2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  it ('takes an array, removes the first item, then shuffles the remaining content', () => {
    expect (randomizer(colors1)).toEqual(expect.arrayContaining(expectedArr))
    expect (randomizer(colors2)).toEqual(expect.arrayContaining(expectedArr2))
  })
})

// FAIL  ./code-challenges.test.js
// randomizer
//   ✕ takes an array, removes the first item, then shuffles the remaining content (1 ms)

// ● randomizer › takes an array, removes the first item, then shuffles the remaining content

//   ReferenceError: randomizer is not defined

// b) Create the function that makes the test pass.

const randomizer = (arr) => {
  slcArr = arr.slice(1, arr.length)
  for (let i = slcArr.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * slcArr.length)
    const k = slcArr[i]
    slcArr[i] = slcArr[j]
    slcArr[j] = k
  }
  return slcArr
}
// console.log(randomizer(colors2));

// PASS  ./code-challenges.test.js
// randomizer
//   ✓ takes an array, removes the first item, then shuffles the remaining content (1 ms)

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// PSEUDOCODE
// create fxn that takes an object and returns end tally of votes
// input: object
// output: end tally (number)
// use dot notation to access key value pairs within objects
// subtract downvotes from upvotes


const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe ('endTally', () => {
  it ('takes in an object containing up and downvotes and returns the end tally', () => {
    expect (endTally(votes1)).toEqual(11)
    expect (endTally(votes2)).toEqual(-31)
  })
})

// FAIL  ./code-challenges.test.js
// endTally
//   ✕ takes in an object containing up and downvotes and returns the end tally (1 ms)

// ● endTally › takes in an object containing up and downvotes and returns the end tally

//   ReferenceError: endTally is not defined

// b) Create the function that makes the test pass.

const endTally = (obj) => {
  return obj.upVotes - obj.downVotes
}
// PASS  ./code-challenges.test.js
// endTally
//   ✓ takes in an object containing up and downvotes and returns the end tally (1 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// PSEUDOCODE
// declare fxn called noDupes that takes in 2 arrays and returns only 1 array with no duplicates.
// input: arrays
// output: array with no duplicates
// use spread operator to make the number of arguments the fxn can take dynamic
// use forEach on argument, then forEach on each value of the argument and push anything that the empty array does not already include into the empty array variable

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe ('noDupes', () => {
  it ('takes in two arrays and returns one without duplicates', () => {
    expect (noDupes(dataArray1, dataArray2)).toEqual(expect.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
  })
})
// FAIL  ./code-challenges.test.js
// noDupes
//   ✕ takes in two arrays and returns one without duplicates

// ● noDupes › takes in two arrays and returns one without duplicates

//   ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

const noDupes = (...arrs) => {
  let noDupeArr = []
  arrs.forEach((arrValue) => {
    arrValue.forEach((value) => {
      if (!noDupeArr.includes(value)) {
        noDupeArr.push(value)
      }
    })
  })
  return noDupeArr
}

// console.log(noDupes(dataArray1, dataArray2));

// PASS  ./code-challenges.test.js
// noDupes
//   ✓ takes in two arrays and returns one without duplicates