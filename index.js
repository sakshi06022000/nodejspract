// console.log("hello World");

// const a = {
//     average: (a, b) => {
//         console.log((a + b) / 2);
//     },
//     percent: (a, b) => {
//         console.log((a / b) * 100);
//     },
// };

// module.exports = a;

//file based

// const fs = require("fs");

// fs.readFile("./sample.txt","utf-8", (err,data) =>{
//         if(err){
//             throw err;
//         }
//         console.log(data);
//     });

// const a = fs.readFileSync("./sample.txt","utf-8");
// const a = "This is made by NPP";
// console.log(a);

// fs.writeFile("./sample.txt", a, ()=>{
// console.log("Written")
// });

// fs.writeFileSync("./sample.txt",a)

// console.log("I am first");

// const { dirname } = require("path");
// const path =require("path");

// const a = path.extname("/node/index.js");

// console.log(a);

// const a = path.basename("C:\Users\shrey\OneDrive\Desktop\NODE JS>");

// console.log(a);

// const a = dirname("C:\Users\shrey\OneDrive\Desktop\NODE JS>");

// console.log(a);

// b ="./6pp"
// const a = path.join(" C:\Users\shrey\OneDrive\Desktop\NODE JS>" + b);
// console.log(a)


// const os =require("os");

// console.log(os.totalmem());


// const http = require("node:http");

// const server = http.createServer((req, res) => {
//     res.end("Working");
// });

// server.listen(4040,"localhost", () => {
//     console.log("Server is working on http://localhost:4040");
// });

const http = require("http");
const fs = require("fs")

 
const port =4040;
const hostname = "localhost";
const home = fs.readFileSync("./index.html","utf-8");

console.log(__dirname)

const server = http.createServer((req,res)=>{
    // res.end("Hello World");
    if(req.url=== "/"){
       return res.end(home);
    }
    else if(req.url=== "/about"){
       return res.end("<h1>ABOUT PAGE</h1>");
    }
    else if(req.url=== "/contact"){
        res.end("<h1>CONTACT PAGE</h1>");
    }
    else if(req.url=== "/service"){
        res.end("<h1>SERVICE PAGE</h1>");
    }
    else if(req.url=== "/service-page"){
        res.end("<h1>SERVICE</h1>");
    }
    else if(req.url=== "/page"){
        res.end("<h1>SERVICE</h1>");
    }
    else{
       res.end("<h1>404 Page not Found</h1>");
    }

    // console.log(req.url);
    // res.end("<h1>Hello World</h1>");

});

server.listen(port,hostname,() =>{
    console.log(`Server is working on http://${hostname}:${port}`);
});


// about-us
//AboutUs
//Aboutus
// C:\Users\shrey\OneDrive\Desktop\NODE JS