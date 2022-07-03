const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');




// -- GET ROUTER -- //
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

// -- POST -- //   --- don`t need yet
// router.post('/', (req,res) => {
//     const 
// })












module.exports = router;