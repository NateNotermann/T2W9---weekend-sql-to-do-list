const { query } = require('express');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');




// ----- GET ------ GET Tasks from  Database -- //
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" ORDER by "id";';
    pool.query(queryText)
        .then((result) =>{
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR in GET QUERY (ROUTER)', error );
            res.sendStatus(500);
        })
});

// ----- POST ----- ADDTASK FUNCTION --------- // 
router.post('/', (req,res) => {
    const newTask = req.body;
    const queryText = `
        INSERT INTO tasks ( name, description, status)
        VALUES ($1, $2, $3 );
        `;
    pool.query(queryText, [newTask.name, newTask.description, newTask.status])
    .then((result)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log( 'ERROR w/ router.post to db (ROUTER)', error );
        res.sendStatus(500)
    })
});


router.delete('/:id', (req, res) => {
    let reqId = req.params.id 
    console.log( `Sent DELETE Request for this ID: (ROUTER)', ${reqId}`);
    let queryText = 'DELETE FROM "tasks" WHERE "id"= $1;';
    pool.query(queryText, [reqId])
    .then(() => {
        console.log( 'Task DELETED' );
        res.sendStatus(200);
    })
    .catch((error) =>{
        console.log(` ERROR DELETING Task (ROUTER) ${queryText}: ${error}`);
        res.sendstatus(500); 
    })
})









module.exports = router;