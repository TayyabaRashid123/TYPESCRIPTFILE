var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making an array in original order
var countriestovisit = ["Jeddah", "China", "Demark", "Brazil"];
console.log("Orginal order:", countriestovisit);
//print an array with alphabetical order without modifying actual one
console.log("Alphabetical Order:", __spreadArray([], countriestovisit, true).sort());
//ensure that array is in original order
console.log('still in orginal order', countriestovisit);
//print a array in reverse order without modifying actual order
console.log.apply(console, __spreadArray(["Reverse Order:"], countriestovisit.reverse(), false));
//ensure that array is in original order
console.log('still in orginal order', countriestovisit);
//we have change the orignal array order now
console.log("Original array Reserved:", countriestovisit.reverse());
//print the array to get back to orginal order
console.log("back to get original order ", countriestovisit.reverse());
//print the array to show that its order has been changed in alphabetical order
console.log("Sorted in Alphabetical order:", countriestovisit.sort());
///we have change again the orignal array order again
console.log("Original array Reserved Again:", countriestovisit.reverse());
