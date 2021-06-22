const os =require('os');
// console.log(os.arch());
// console.log(os.constants
const free_mem =os.freemem();
// console.log(`${free_mem /1024/1024/1024}`);
// const total_mem =os.totalmem();
// console.log(`${total_mem /1024/1024/1024}`);
// const cpu =os.cpus();
// let text=JSON.stringify(cpu);
// console.log(text);
// console.log(os.hostname());
console.log(os.release());
