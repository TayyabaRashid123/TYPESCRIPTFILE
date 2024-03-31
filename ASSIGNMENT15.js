var guestList = ["SHAZIA", "SAMINA", "RIZWANA"];
var dontCome = guestList[2];
console.log(dontCome, "she is not coming");
guestList.splice(2, 1, "SAIMA");
guestList.forEach(function (guest) { return console.log("hello ".concat(guest, ",would you like to dinner with me?;")); });
