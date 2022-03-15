var http = require('http');
const port = process.env.PORT || 3000;

var requestHandler = function (request, response ){
    console.log(request.url);
    response.end('Hello from Node server');

}

var server = http.createServer(requestHandler);
var host = '0.0.0.0';
server.listen(port,host);

console.log('Node server started on port 3000');


// const express = require('express');
// const app = express();
// const port = 3000;

// app.set('views' , 'views');
// app.set('view engine', 'hbs');
// app.use(express.static('public'));

// app.get('/home', function (request, response){
//     response.render('home', {name: 'John Doe'})

// });

// app.listen(port);
// console.log('server is listening on port 3000');



// // Latest Code

// const express = require('express');
// const app = express();
// const port = 3000;
// // const port = process.env.Port || 3000;
// const bodyParser = require ('body-parser');
// const urlEncodedParser = bodyParser.urlencoded({extended:false});

// app.set('views' , 'views');
// app.set('view engine', 'hbs');
// app.use(express.static('public'));



// app.get('/contacts', function (request, response){
//     response.render('contact_us');


// });

// app.post('/process-contacts',urlEncodedParser, function(request, response){
//     var myweight = request.body.weight;
//     var myheight= request.body.height;
//     var BMI = myweight/(myheight*myheight);

//     response.end('Your weight is:'+ request.body.weight +' and your height in meters is:'+request.body.height
//                     + ' Then your BMI is:' + BMI );
                    

                   


// });

// app.listen(port);
// console.log('server is listening on port ${port}');



