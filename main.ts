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
guestList.forEach(oneGuest=>console.log(`SALAM ${oneGuest}would you like to dinner with me)?`));


//inform that only 2 guests are invited for dinner
console.log("Unfortunately, The new dinner table won't arrive on time, As I can only invite 2 guests dinner with me");


//using while loop to remove the guest from the array until only two guest are invited
while(guestList.length > 2)
{
   let removedguest = guestList.pop();
   console.log(`Sorry,${removedguest} i cant invite you to dinner `)
}

// print a message last two guest are invited
console.log("Invitation to the last two Guests");
guestList.forEach(lasttwo => console.log(`luckily ${lasttwo},you are still invited to dinner`));


//removing now both of lasttwo guest from lisy
guestList.pop();
guestList.pop();
console.log("Empty list:",guestList);





