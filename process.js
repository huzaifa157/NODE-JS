let args = process.argv;   /* IT RETURN AN ARRAY CONTANING COMMAND LINE ARGUMENTS PASSED WHEN NODE JS Process Launch*/

for(let i = 2 ; i<args.length; i++){
    console.log("Hello! to " , args[i]);
}
