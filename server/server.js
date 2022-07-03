const express = require('express');
const app = express();  // call express
const bodyParser = require('body-parser'); 
const PORT = process.env.PORT || 5000;// port server will be running on
const taskRouter = require('./routes/task.router.js'); // --------------error

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
// express static file serving  -public is teh folder name
    // I believe it should know to find a folder called modules from there


app.use('/tasks', taskRouter ); // --------------error











// Start listening for requests on the PORT 
app.listen(PORT, () => {
    console.log( 'Server is listening on port', PORT );
});