const express = require('express');
const app =express();



app.get("/",(req, res) =>{
    const js=[{ 
        id: 26,
        name :"Keshav Kumar",

    },
    { 
        id: 26,
        name :"Amit Kumar",

    },
    { 
        id: 26,
        name :"Keshav Kumar",

    },
    { 
        id: 26,
        name :"Keshav Kumar",

    },
    { 
        id: 26,
        name :"Keshav Kumar",

    },
    ]
    res.send(js[2])

} );










const port =5500
app.listen(port,()=>{
console.log(`Listening is ${port}`);
}); 