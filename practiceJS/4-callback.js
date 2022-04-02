setTimeout(()=>{
    console.log("log me");
},2000);

const names = ["John","Lenon","Peter parker","Angelina"];
const shortnames = names.filter((name)=>{
    return name.length < 5;
});
console.log(shortnames);

const geoCode = (address,callbackFn)=>{
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0
        }
        callbackFn(data);
    },0);
}
const geoDate = geoCode("Colombo",(geoData)=>{
    console.log(geoData);
});
console.log(geoDate);


const name = "Decon";