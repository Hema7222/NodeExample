const fs = require('fs');

const data = "Hi, this is newFile.txt";

fs.writeFile('./node_example/myFile.txt', data, (err) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('witten to file successfully');
    }
})