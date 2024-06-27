const fs = require('fs');

fs.readdir('./node_example', (err, files) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Directory read successfully! Here are the files: ');
        console.log(files);
    }
})