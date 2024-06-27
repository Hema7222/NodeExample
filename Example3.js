const fs = require('fs');

fs.mkdir('./node_example', (err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Folder created');
    }
})