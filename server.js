const express = require('express');
const cors = require('cors');
const app = express();

//use cors as middleware
app.use(cors());

/*
Next, listen to a specific route with app.use. 
The first argument is the path the application will listen to and the second argument 
is a callback function that will run when the application serves the path. 
The callback takes a req argument, which contains the request data and a res argument 
that handles the result.
*/


//listen to specific route
app.use('/login',(req,res)=>{
    res.send({
        token:'test 123'
    });
});


//run server
app.listen(8080,()=>{
    console.log('server is running on port 8080');
});