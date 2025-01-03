// let a = BigInt(1223)
// let obj = {
//     name:'gokul',
//     key:{
//         key2:{
//             k: 2,
//         }
//     }
// }
// const oj = {
//     key:'pro',
// }
// oj.key = 'jov'
// console.log(oj);

// function ano(){
//     console.log(1);
//     console.log(10);
//     return 90;
// }
// console.log(ano());

// function arr(){
//     let obj = new Object()
//     obj.name = 'gokul'
//     return obj;
// }
// console.log(arr())


// let n = 1;
// switch(n){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log(2)
//     case 3:
//         console.log(3);
//     default:
//         console.log(34);
// }


// let fun = (a,b,c)=>{
//     return a+b+c
// }
// console.log("hi","hello","vanakkam!");
// let obj1 = {
//     name1 :'Gokul',
//     class1 : 'MTS',
// }
// function destru({name1,class1}){
//     return name1+class1;
// }
// console.log(destru(obj1));


// function wrapper(inner){
//     console.log("wrapper");
//     inner();
// }

// function inner(){
//     console.log("Inner -<");
// }
// wrapper(inner);

// function wakeup(brushing){
//     console.log('Wake up!');
//     brushing();
// }
// function brushing(eating){
//     setTimeout(()=>{
//         console.log('Brushed!');
//         eating();
//     },3000)
// }
// function eating(final){
//     setTimeout(()=>{
//         console.log("Start eating");
//         final()
//     },3000)
// }

// wakeup(()=>{
//     brushing(()=>{
//         eating(()=>{
//             console.log('Fully eaten');
//             setTimeout(()=>{
//                 console.log('Ready to go to school');
//             },3000)
//         })
//     })
// })
// let k = "File.txt"
// function fetchProcessing(callback){
//     console.log(`Processing ${k}`);
//     setTimeout(() => {
//         callback(k)
//     }, 2000);
// }
// function fetchDownloading(name,callback){
//     console.log(`Downloading ${name}`);
//     setTimeout(()=>{
//         callback(name,"File Preparing!");
//     },2000)
// }

// function fetchCompletion(fn,msg,callback){
//     console.log(`${fn} ${msg}`);
//     setTimeout(()=>{
//         callback()
//     },2000)
// }



// fetchProcessing((k)=>{
//     fetchDownloading(k,(name,msg)=>{
//         fetchCompletion(name,msg,()=>{
//             console.log("Completed! View it");
//         })
//     })
// })



function promise(){
    return new Promise((resolve,reject)=>{
        let msg = true;
        if(msg){
            resolve("Hello User")
        }
        else{
            console.log("Failed to Load");
        }
    })
}
promise().then((val)=>console.log(val)).catch((val)=>console.log(val))


let pro1 = new Promise((res,rej)=>{
    let fin = false;
    if(fin){
        res("Cheen Tapak Dum Dum")
    }else{
        rej("Nothing")
    }
})
let pro2 = new Promise((res,rej)=>{
    let fin = false;
    if(fin){
        res("Cheen Tapak Dum Dum")
    }else{
        setTimeout(()=>{
            rej("Destroyed earth")
        },4000)
    }
})
let pro3 = new Promise((res,rej)=>{
    let fin = true;
    if(fin){
        res("Thank You everyone")
    }else{
        rej("Nothing")
    }
})

async function runner() {
    try{
        let data1 = await pro1;
        console.log(data1);
    }catch(err){
        console.log(err);
    }
    try{
        let data1 = await pro2;
        console.log(data1);
    }catch(err){
        console.log(err);
    }
    try{
        let data1 = await pro3;
        console.log(data1);
    }catch(err){
        console.log(err);
    }
}

runner();
