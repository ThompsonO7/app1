const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');


const todo = require('./todolist.json');
const employees = require('./employeeList');

const url = 'mongodb://localhost:27017';
let dbName = 'employeedb';
const client = new MongoClient(url, { useUnifiedTopology: true });

let employeedb;
let todoCollection;

(async () => {  
   
    await client.connect(); 
    employeedb = client.db('employeedb');
    todoCollection = dbname.collection('todo');
})();

router.get('/', async (req, res)=>{
    const todolist = await todoCollection.find({}).toArray();
    res.render('admin', {
        todolist, 
        employees
    })
   
});   


       



module.exports = router;