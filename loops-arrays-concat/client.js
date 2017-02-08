
//
//
//PRACTICE FUNCTION 1
//
// var diff = function diffOfSquares (a, b) {
//   return a*a - b*b;
// };
// console.log(diff(9, 5));
//
// var diff = function diffOfSquares (a, b) {
//   return a*a - b*b;
// };
//
//
//PRACTICE FUNCTION 2
//
// // Declare the function 'myFunction'
// function myFunction(theObject) {
//    theObject.brand = "Acura";
//  }
//
// //Declare variable 'mycar';
// // create and initialize a new Object;
// // assign reference to it to 'mycar'
//  var mycar = {
//    brand: "Acura",
//    model: "MDX",
//    year: 2002
//  };
//
//  /* Logs 'Honda' */
//  console.log(mycar.brand);
//
//  //Pass object reference to the function
//  myFunction(mycar);
//
//  //Logs 'Acura' as the value of the 'brand' property
// //of the object, as changed to by the function.
//  console.log(mycar.model);
//  console.log(mycar.year);
//
// modelled off of online resources, edited for accuracy
//
//
//
//
//
//
//

var raceArray = ["GM15", "TCM15", "GM16", "WS16 ", "LW17", "TCM17"];

myFunction() {
  //code
}


for(var i=0; i < raceArray.length; i++) {
  if(raceArray[i] = 4) {
    console.log(raceArray[i]);
  }
}

// console.log(raceArray[4]);
// console.log(raceArray[5]);


// myFunction(parameters1, parameters2, paremeters3) {
//     code to be executed;
//    }
//use slice to cut out the part I need?
//except I don't need a chunk
//just the string values put together after a certain point
//so I need something that "returns a string that combines all the values
//starting at the index of the number passed in through the end of the array"
//(copied from the hw assignment page)
//I want to end up with THIS:
//console.log(myFunction(["GM15", "TCM15", "GM16", "WS16 ", "LW17 ", "TCM17 "], 4));
//returning
//LW17 TCM17
//because it would go through the array 0, 1, 2, 3 - ah, 4 = LW17
//and the console.log(yourFunction) would say "Okay, run this fxn with these parameters
//and when you get to thing number 4, only print that and things after that thanks bye."
//
//
//
// Example 1
//
// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 3));
// should log
// Hi There!
//
// Example 2
//
// console.log(yourFunction(["ASDF", "BLAH", "Oh! ", "Hi ", "There!"], 2));
// should log
// Oh! Hi There!
//
//
//
//
// fuck fuck fuck fuck
