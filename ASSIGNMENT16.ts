//creating a guest list array
let guestList=["SHAZIA","SAMINA","RIZWANA"];

// 1 guest is not coming
let dontCome = guestList [2];

//message for not coming
console.log(dontCome,"she is not coming");

//add 1 new guest
guestList.splice(2,1, "SAIMA");

// asking new guest that would you like to dinner with me
guestList.forEach (guest => console.log(`hello ${guest},would you like to dinner with me?;`));

// meassage for bigger table
console.log("GOOD NEWS ! WE HAVE FOUND A BIGGER DINNER TABLE FOR DINNING");

// adding a new guest at starting index of array
guestList.unshift("RASHID");

// adding a new guest at ending index of array
guestList.push("TOOBA");

//get a middle index of guest list array
let middleIndex : number = Math.floor(guestList.length / 2); 

//adding a new guest as middle of an array
guestList.splice (middleIndex,0 ,"HAMZA");

//print message
console.log("updated list of oue guest");
//invitation message one by one
guestList.forEach(oneGuest=>console.log(`SALAM ${oneGuest}woulg you like to dinner with me)?`));
