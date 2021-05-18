const http = require("http");
const path = require("path");
const fs = require("fs");

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  /*
    console.log(req.url);
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content)
        })
    }

    if(req.url==='/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'Content-Type':'text/html' });
            res.end(content)
        })
    }
    if(req.url==='/api/users'){
        const users = [
            {name:'Bob',age:28},
            {name:'sarah',age:30}
        ];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
    }*/

  //Build file path
   let filepath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filepath);

    //Extension of the file
    let extname = path.extname(filepath);

    //Initial content type
    let contentType = 'text/html';

    //Check ext and st content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;

        case '.css':
            contentType = 'text/css';
            break;

        case '.json':
            contentType = 'application/json';
            break;

        case '.png':
            contentType = 'image/png';
            break;

        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

  //Read file
  fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code =="ENOENT"){
                //Page not found
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content,'utf8');
                })
            }else{
                    //Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        }else{
                    //Success
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8')
        }
    })

  /*console.log(`Request for ${req.url} by method`);

  if (req.method == "GET") {
    var fileUrl;
    if (req.url == "/") fileUrl = "/index.html";
    else fileUrl = req.url;

    var filePath = path.resolve("./Public" + fileUrl);
    const fileExt = path.extname(filePath);
    if (fileExt == ".html") {
      fs.exists(filePath, (exists) => {
        if (!exists) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(
            "<html><body><h1>Error 404:" + fileUrl + "</h1></body></html>"
          );

          return;
        }
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(
        "<html><body><h1>Error 404:" +
          fileUrl +
          "not an HTML file</h1></body></html>"
      );

      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<html><body><h1>Error 404:" +
        fileUrl +
        "req method not supported</h1></body></html>"
    );

    return;
  }*/
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<html><body><h1>Hello, World!</h1></body></html>");
});

//USing callbacks
/* var rect = require('./Reference/rectangle');
function solveRect(l,b){
    console.log("Solving for rectangle with l = "+ l+"and b ="+b);

   rect(l,b,(err, rectangle)=>{
    if(err){
        console.log("Error: ", err.message);
    }
    else{
        console.log("The area of the rectangle of the dimension: "+ l+" and b="+b +" is: "+ rectangle.area());
        console.log("The perimeter of the rectangle of the dimensions l="+l+" and b="+b+" is: "+ rectangle.perimeter());
    }
   });

   console.log("This statement is after the callback to rect()");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);*/

server.listen(port, () => {
  console.log(`server running on port ${port}`);
});
