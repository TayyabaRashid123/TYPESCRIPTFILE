//creating a guest list array
var guestList = ["SHAZIA", "SAMINA", "RIZWANA"];
// 1 guest is not coming
var dontCome = guestList[2];
//message for not coming
console.log(dontCome, "she is not coming");
//add 1 new guest
guestList.splice(2, 1, "SAIMA");
// asking new guest that would you like to dinner with me
guestList.forEach(function (guest) { return console.log("hello ".concat(guest, ",would you like to dinner with me?;")); });
// meassage for bigger table
console.log("GOOD NEWS ! WE HAVE FOUND A BIGGER DINNER TABLE FOR DINNING");
// adding a new guest at starting index of array
guestList.unshift("RASHID");
// adding a new guest at ending index of array
guestList.push("TOOBA");
//get a middle index of guest list array
var middleIndex = Math.floor(guestList.length / 2);
//adding a new guest as middle of an array
guestList.splice(middleIndex, 0, "HAMZA");
//print message
console.log("updated list of oue guest");
//invitation message one by one
guestList.forEach(function (oneGuest) { return console.log("SALAM ".concat(oneGuest, "woulg you like to dinner with me)?")); });
