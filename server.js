// A simple blocking server
const express=require('express');

/*const cluster= require('cluster'); 

const os=require('os');*/

const app=express();

function delay(duration)
{
    // event loop blocking
    const startTime= Date.now();
    while(Date.now()-startTime<duration)
    {
        // block event loop
    }
}

app.get('/',(req,res)=>{
    res.send(`Server Performance!${process.pid}`);
});

/*app.get('/timer',(req,res)=>{
    // slow response
    delay(9000);
    res.send(`Huehuehue${process.pid}`);
});*/
        // zero down time running
        app.get('/timer',(req,res)=>{
            // slow response
            delay(4000);
            res.send(`Huehuehuehahaha${process.pid}`);
        });
    console.log('Calling server.js');
/*
if(cluster.isMaster)
{
    console.log('Master is running...');
/*    cluster.fork();
    cluster.fork();
    const NUM_WORKERS=os.cpus().length;
    for(i=0;i<NUM_WORKERS;i++)
    {
        cluster.fork();
    }
}
else{
    console.log('Work process is running.');
    app.listen(3000);
}*/

console.log('Worker process is running');
app.listen(3000);