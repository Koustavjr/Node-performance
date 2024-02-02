const {Worker,workerData,isMainThread}=require('worker_threads');

if(isMainThread)
{
    console.log(`Main!${process.pid}`);
    new Worker(__filename,{
        workerData:[7,5,9,1]
    });
    new Worker(__filename,{
        workerData:[2,8,6,1]
    });
}
else
{
    console.log(`worker${process.pid}`);
    console.log(`${workerData} after sorting ${workerData.sort()}`);
}