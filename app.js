const express = require('express');
const path  = require('path');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.use('/css', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname , '/node_modules/jquery/dist/')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/', require('./routes/employeeList'));
app.use('/admin', require('./routes/adminRoute'));



const port = process.env.PORT || 2000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
});
