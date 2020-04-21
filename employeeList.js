const router = require('express').Router();

const { MongoClient } = require('mongodb');


const todo = require('./todolist.json');

const url = 'mongodb://localhost:27017';
let dbName = 'employeedb';
const client = new MongoClient(url, { useUnifiedTopology: true });

let employeedb;
let todoCollection;

(async() => {

    await client.connect();
    dbname = client.db('employeedb');
    todoCollection = dbname.collection('todo');
})();

const employees = [{
        name: "John bless",
        Department: "MATHS",
        gender: "Male",
        mail: "johnbless@gmail.com",
        image: "/images/pic1.jpg"
    },
    {
        name: "Oye Odei",
        Department: "ENGLISH",
        gender: "Female",
        mail: "oyeodei@gmail.com",
        image: "/images/pic7.jpg"
    },
    {
        name: "Thelma James ",
        Department: "CHEMISTRY",
        gender: "Female",
        mail: "thelmajames@gmail.com",
        image: "/images/pic6.jpg"
    },
    {
        name: "Sovereign welbecW",
        Department: "PHYSICS",
        gender: "Male",
        mail: "sovereignwelbeck@gmail.com",
        image: "/images/pic5.jpg"
    },
    {
        name: "Glory Happy",
        Department: "EMATHS",
        gender: "Male",
        mail: "gloryhapp@gmail.com",
        image: "/images/pic1.jpg"
    },
    {
        name: "David James",
        Department: "GOVERNMENT",
        gender: "Male",
        mail: "davidjames@gmail.com",
        image: "/images/pic.jpg"
    },
    {
        name: "Thomas Kofi",
        Department: "LITERATURE",
        gender: "Male",
        mail: "thomaskofi@gmail.com",
        image: "/images/pic3.jpg"
    },
    {
        name: "Easy Ofori",
        Department: "BUSINESS",
        gender: "Female",
        mail: "easyofori@gmail.com",
        image: "/images/pic4.jpg"
    }
]


router.get('/', (req, res) => {
    res.render('home', {
        employeeList: employees
    })
});



router.get('/todolist', async(req, res) => {
    const todolist = await todoCollection.find({}).toArray();
    res.render('todolist', {
        todolist
    })
});


module.exports = router;