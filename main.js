var personName = "Tayyaba";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
//title case ko regix krenga
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
