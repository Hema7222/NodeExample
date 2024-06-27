const fs = require('fs');

fs.rename('./node_example/myFile.txt', './node_example/newFileAsync.txt', (err) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('File renamed successfully');
    }
})