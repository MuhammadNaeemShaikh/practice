// console.log(global)

// const greet = (name) =>{
//     console.log(`Hello ${name}`);
// }

// greet("Naeem Shaikh");
// greet("Shaikh Sahab");

// setTimeout(() => {
//     console.log("Time out")
//     clearInterval(int)
// }, 3000);

// const int = setInterval(() => {
//    console.log("Interval after 1 sec") 
// }, 1000);


// console.log(__dirname);
// console.log(__filename);

// const test = require('./test');
// const {arr,name} = require('./test');
// console.log(arr);
// console.log(name);

//operating system
// const os = require('os');

// console.log(os.homedir,os.platform);


//reading file

// const fs = require('fs')

// fs.readFile('./test.js',(err,data)=>{
//     if(!err){
//         console.log(data.toString());
//     }else{
//         console.log("error",err);
//     }
// })

// console.log('last line')


//writing files

// const fs = require ('fs');

// fs.writeFile('./blog1.txt','Hello World',(err)=>{
// fs.writeFile('./blog2.txt','Hello World pakistan',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('File written');
// })



//directories

// const fs = require('fs');

// fs.mkdir('./asset',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("folder created");
//     }
// })

// if (!fs.existsSync('./asset')) {
//     fs.mkdir('./asset', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("folder created");
//         }
//     })
// }

// if (!fs.existsSync('./asset')) {
//     fs.mkdir('./asset', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("folder created");
//         }
//     })
// }else{
//     fs.rmdir('./asset',(err)=>{
//         if (err) {
//             console.log("error:",err);
//         } else {
//             console.log("folder deleted");
//         }
//     })
// }


//streams

// const fs = require('fs');

// const readStream = fs.createReadStream('./blog3.txt');
// const writeStream = fs.WriteStream('./blog4.txt');

// readStream.on('data',(chunk)=>{
//     console.log("--------------New Chunk------------");
//     console.log(chunk.toString());
//     writeStream.write('\nNEW\n')
//     writeStream.write(chunk)
// })

// readStream.pipe(writeStream);

//server

// const http = require ('http');

// const server = http.createServer((req,res)=>{
//     console.log('request made');
// });

// const http = require ('http');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
// })

// server.listen(3000,'localhost',()=>{
//     console.log("listening for request on port 3000");
// })

// Response

// const http = require ('http');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
// })

// server.listen(3000,'localhost',()=>{
//     console.log("listening for request on port 3000");
// })

// const http = require ('http');
// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     res.setHeader('content-type','text/html');
//     // res.write("Hello Shaikh Sb");
//     res.write("<head><link rel='stylesheet' href='style.css' /></head>");
//     res.write("Hello Muhammad Naeem");
//     res.write("You are great");
//     res.end();
// })

// server.listen(3000,'localhost',()=>{
//     console.log('listening to 3000 port')
// })

// const http = require('http');
// const fs = require ('fs');

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     res.setHeader('content-type','text/html');
//     fs.readFile('./view/index.html',(err,data)=>{
//         if(err){
//             console.log("error :",err);
//             res.end();
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// })

// server.listen(3000,'localhost',()=>{
//     console.log('listening');
// })

// Basic Routing

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);
//     res.setHeader('content-type', 'text/html');
//     let path = './view/';

//     switch (req.url) {
//         case '/':
//             path = path + 'index.html'
//             break;
//         case '/about':
//             path = path + 'about.html'
//             break;
//         default:
//             path = path + '404.html'
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log("error :",err);
//             res.end();
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// })

// server.listen(3000, 'localhost', () => {
//     console.log('listening');
// })

//redirects

// const http = require ('http');
// const fs = require ('fs');

// const  server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
//     res.setHeader('content-type','text/html');

//     let path = './view/';
//     switch (req.url) {
//         case '/':
//                 path += 'index.html';
//             break;
//         case '/about':
//             path += 'about.html';
//         break
//         case '/about-me':
//             res.statusCode = 301;
//             res.setHeader(Location,'/about');
//             res.end();
//         break;
            
//         default:
//             break;
//     }

//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log("error :",err)
//         }
//         else{
//             res.write(data);
//             res.end();
//         }
//     })
// })

// server.listen(3000,'localhost',()=>{
//     console.log('listenting');
// })

// lodash

// let __ = require('lodash')

// const num = __.random(0,20);
// const greet = __.once(()=>{
//     console.log('hello');
// })
// greet();
// greet();
// console.log(num);

const express = require ('express');
const app = express();
// console.log(app);
app.listen(3000);

app.get('/',(req,res)=>{
    console.log(req.url,req.method);
    // res.send('<p>Home Page');
    res.sendFile('./view/index.html',{root:__dirname})
    console.log(__dirname);
})

app.get('/about',(req,res)=>{
    console.log(req.url,req.method);
    res.sendFile('./view/about.html',{root:__dirname})
})

//redirect

app.get('/about-us',(req,res)=>{
    console.log(req.url,req.method);
    res.redirect('/about');
})

// 404 page condition runs every time when no above condition run

app.use((req,res)=>{
    res.status(404).sendFile('/view/404.html',{root:__dirname})
})
