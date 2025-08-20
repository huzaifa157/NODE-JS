 
        //    Transfer of data from one file to another  
 
 // require() a build-in funtion to include external modules that exit in separate file 
// module.exports a special object 
 
// there are three way  to exports a object 

// 1st way 

// let value1 = 5;
// const value2= 4;
// let sum = (a,b)=> a + b;

// let obj={
//     value1: value1,
//     value2:value2,
//     sum:sum
// }
// module.exports = obj;


// 2nd way 


// let value1 = 5;
// const value2= 4;
// let sum = (a,b)=> a + b;


// module.exports ={
//     value1: value1,
//     value2:value2,

//     sum:sum
// }


// 3rd way 

 exports.value1 = 5;
exports.value2= 4;
exports.sum = (a,b)=> a + b;

// 3rd way is simplest where we use exports before varaible with dot, but for lengthy data 2nd way or 1st way is best


      
