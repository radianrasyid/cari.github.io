const path = require('path');
const express = require('express');
const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"))

app.get('/', function(req,res){
  res.writeHead(200);
  res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.get('/sewa', function(req,res){
  res.sendFile(path.join(__dirname + "/public/sewa.html"))
})

app.listen(port, ()=>{
  console.log(`http://localhost:${port}`);
})

// const { redirect } = require('express/lib/response');
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const url = require('url');
// const { reset } = require('nodemon');
// const port = 8000;
// const PUBLIC_DIRECTORY = path.join(__dirname, 'public');

// const renderHTML = (path, res) => {
//   fs.readFile(path, (err, data) => {
//     if(err){
//       res.writeHead(404)
//       res.write("PAGE NOT FOUND")
//     }else{
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http.createServer((req, res) => {
//   let requesturl = req.url;
//   switch(requesturl){
//       case "/" || "":
//         requesturl = "/index.html";
//         break;
//       case "/sewa":
//         requesturl = "/sewa.html";
//         break;
//       default:
//         requesturl = req.url;
//     }
//   const parseURL = url.parse(requesturl);
//   const pathName = `${parseURL.pathname}`
//   const extension = path.parse(pathName).ext;
//   const absolutePath = path.join(PUBLIC_DIRECTORY, pathName);
//   const mapContent = {
//     ".css": "text/css",
//     ".jpg": "image/jpeg",
//     ".html": "text/html",
//     ".js": "text/javascript",
//     ".png": "image/png",
//     ".svg": "image/svg+xml"
//   }

//   fs.exists(absolutePath, (exist) => {
//     if(!exist){
//       res.writeHead(404);
//       res.end("FILE NOT FOUND");
//       return;
//     }
//   })

//   fs.readFile(absolutePath, (err, data)  => {
//     if(err){
//       res.statusCode=500;
//       res.end("FILE NOT FOUND");
//       console.log(err);
//     }else{
//       res.setHeader('Content-Type', mapContent[extension] || "text/plain");
//       res.end(data)
//     }
//   });
// })
// .listen(port, () => {
//   console.log(`http://localhost:${port}`);
// })