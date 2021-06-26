const EventEmitter = require('events');
const events =new EventEmitter();
events.on('nameScream',()=>{
console.log("Working Good");
})
events.on('nameScream',(sc)=>{
console.log("Working good " +sc);
})
// events.on('nameScream',()=>{
// console.log("Working Fine");
// })
events.emit("nameScream",202);
events.on('scCode',(sc,str)=>{
    console.log(` Status Code is ${sc} and message is ${str}`);
})
events.emit("scCode",200,"Okay");