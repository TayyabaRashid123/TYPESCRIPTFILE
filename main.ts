//making an array in original order
let countriestovisit : string[] = ["Jeddah","China" , "Demark" , "Brazil"]
console.log("Orginal order:",countriestovisit);

//print an array with alphabetical order without modifying actual one
console.log("Alphabetical Order:",[...countriestovisit].sort());


//ensure that array is in original order
console.log('still in orginal order',countriestovisit);

//print a array in reverse order without modifying actual order
console.log("Reverse Order:",...countriestovisit.reverse());


//ensure that array is in original order
console.log('still in orginal order',countriestovisit);


//we have change the orignal array order now
console.log("Original array Reserved:",countriestovisit.reverse());


//print the array to get back to orginal order
console.log("back to get original order ",countriestovisit.reverse());

//print the array to show that its order has been changed in alphabetical order
console.log("Sorted in Alphabetical order:",countriestovisit.sort());

///we have change again the orignal array order again
console.log("Original array Reserved Again:",countriestovisit.reverse());
