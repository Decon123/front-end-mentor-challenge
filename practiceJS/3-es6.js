/* //template strings
const a = 10;
const b = 5;
const sum = `${a + b}`;
console.log(sum);

//use template strings to concatenate strings
const name = "Decon";
const greeting = `Hello, ${name}`;
console.log(greeting);
 */

//exercise 1
const allGreetings = ["Happy Birthday!","Merry Christmas my love","A happy christmas to all the family","You're all I want for Christmas","Get well soon"];

for(let i=0;i<allGreetings.length;i++){
    if(allGreetings[i].includes("Christmas") || allGreetings[i].includes("christmas")) {
        console.log(allGreetings[i]);
    }
}

console.log("================================================");
//exercise 2
const cities = ["IonDon","ManCHESTer","BiRmiNGHAM","liVERpoOL"];

for(let i=0;i<cities.length;i++) {
    const capital = /[A-Z]/g;
    let newCities;
    if(capital.test(cities[i][0])) {
        newCities = cities[i][0] + cities[i].slice(1,).toLowerCase();
    }else {
        newCities = cities[i].toLowerCase();
    }
    
    console.log(newCities);
}

console.log("================================================");
//exercise 3
const stationCodes = ["MAN675847583748sjt567654;Manchester Piccadilly",
"GNF576746573fhdg4737dh4;Greenfield",
"LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
"SYB4f65hf75f736463;Stalybridge",
"HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield"];

for(let i = 0;i < stationCodes.length;i++) {
    const stationCode = stationCodes[i].slice(0,3);
    const stationName = stationCodes[i].slice(stationCodes[i].lastIndexOf(";")+1);
    console.log(`${stationCode}:${stationName}`);
}


//string exercises
//ex-1
function checkInput(input) {
    if(typeof(input) === "string") {
        return true;
    }else {
        return false;
    }
}

console.log(checkInput("Decon"));
console.log(checkInput([1,2,3]));
console.log(checkInput(12));
//
console.log("================================");
//ex-2
function checkString(str) {
    if(str.length === 0) {
        return true;
    }else {
        return false;
    }
}
console.log(checkString(''));
console.log(checkString("Decon"));

//
console.log("================================");
//ex-3
function strToArr(str){
    return str.split(" ");
}
console.log(strToArr("Robin Singh"));

//
console.log("================================");
//ex-4
function truncate_string(str) {
    return str.substr(0,4);
}
console.log(truncate_string("Robin Singh"));

//ternary operator
const largeNumber = (5 > 7) ?  "Correct" :  "Incorrect";
console.log(largeNumber);