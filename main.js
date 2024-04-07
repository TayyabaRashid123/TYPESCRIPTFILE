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
guestList.forEach(function (oneGuest) { return console.log("SALAM ".concat(oneGuest, "would you like to dinner with me)?")); });
//inform that only 2 guests are invited for dinner
console.log("Unfortunately, The new dinner table won't arrive on time, As I can only invite 2 guests dinner with me");
//using while loop to remove the guest from the array until only two guest are invited
while (guestList.length > 2) {
    var removedguest = guestList.pop();
    console.log("Sorry,".concat(removedguest, " i cant invite you to dinner "));
}
// print a message last two guest are invited
console.log("Invitation to the last two Guests");
guestList.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, ",you are still invited to dinner")); });
//removing now both of lasttwo guest from lisy
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
