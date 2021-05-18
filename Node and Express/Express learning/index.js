


                //EXPRESS ROUTING
var express = require('express');

var hostname = '127.0.0.1';
var port = 3003;

var app = express();
//GET
//POST
//PUT
//DELETE
app.get('/',(req,rep)=>{
    rep.send('this is home page')
})

app.get('/about',(req,rep)=>{
    rep.send('this is about page')
})

app.get('/contact',(req,rep)=>{
    rep.send('this is contact page')
})


app.listen(port,hostname,()=>{
    console.log(`our server is live on http://${hostname}:${port}/`);;
});





                    //PASS PARAMETER IN URL ROUTE USING EXPRESS

/*var express = require('express');

var hostname = '127.0.0.1';
var port = 3003;

var app = express();
//GET
//POST
//PUT
//DELETE
app.get('/',(req,rep)=>{
    rep.send('this is home page')
})

app.get('/about',(req,rep)=>{
    rep.send('this is about page')
})

var students ={
    1:'Mark',
    2:'Tom',
    3:'Elizabeth is a fool'
}

app.get('/students/:id',(req,rep)=>{
    rep.send('You have requested the student id : '+ students[req.params.id])
})


app.listen(port,hostname,()=>{
    console.log(`our server is live on http://${hostname}:${port}/`);;
});*/




                        //TEMPLATING ENGINES(EJS)
/*var express = require('express');

var hostname = '127.0.0.1';
var port = 3003;

var app = express();
app.set('view engine', 'ejs');
//GET
//POST
//PUT
//DELETE
app.get('/',(req,rep)=>{
    rep.sendFile(__dirname +'/index.html');
})

app.get('/about',(req,rep)=>{
    rep.sendFile(__dirname + '/about.html');
})

var students ={
    1:'Mark',
    2:'Tom',
    3:'Elizabeth is a fool'
}

app.get('/students/:id',(req,rep)=>{
    rep.render('students',{name : students[req.params.id], id: req.params.id})
   
})


app.listen(port,hostname,()=>{
    console.log(`our server is live at http://${hostname}:${port}/`);
});*/




                //CONTROL FLOWS WITH EJS
var express = require('express');
var app = express();

var hostname = '127.0.0.1';
var port = 3003;

app.set('view engine','ejs');

var students = {
    1:{
        name:'mark',
        subject:['computer','chemistry','biology']
    },
    2:{
        name:'tom',
        subject:['maths','SQL','c']
    },
    3:{
        name:'john',
        subject:['Geography','Java','']
    }
}

app.get('/students/:id',(req,rep)=>{
    rep.render('students',{name: students[req.params.id].name, id: req.params.id, 
        subjects:students[req.params.id].subject});
})

app.listen(port,hostname,()=>{
    console.log(`your server is live at http://${hostname}:${port}/`);
});