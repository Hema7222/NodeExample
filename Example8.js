const fs = require('fs');

fs.unlink('./node_example/newFileAsync.txt', (err) =>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('File deleted successfully');
    }
})