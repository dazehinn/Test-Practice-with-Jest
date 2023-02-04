function capitalize(string) {
let firstLetter = string.slice(0,1);
firstLetter = firstLetter.toUpperCase();

let stringRest = string.slice(1);
stringRest = stringRest.toLowerCase();
console.log(firstLetter + stringRest)
return firstLetter + stringRest;
}

export default capitalize;