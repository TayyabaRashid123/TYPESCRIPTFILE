let guestList=["SHAZIA","SAMINA","RIZWANA"];
let dontCome = guestList [2];
console.log(dontCome,"she is not coming");
guestList.splice(2,1, "SAIMA")
guestList.forEach (guest => console.log(`hello ${guest},would you like to dinner with me?;`))