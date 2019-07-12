var fs=require('fs');
fs.unlink('./stuf/writeMe.txt',function(){
    fs.rmdir('stuf',function(){
        console.log('Dne');
    });
});