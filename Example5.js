const fs = require('fs');

const data = "\nHi, this is append text message";

fs.writeFile('./node_example/myFile.txt', data, {flag: 'a'}, (err) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('witten to file successfully');
    }
})