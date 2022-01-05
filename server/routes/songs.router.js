const express = require('express');
const pg = require('pg');
const songsRouter = express.Router();
const pool = require('../modules/pool');


songsRouter.get('/', (req, res) => {
    const queryText = `SELECT * FROM "songs"`;

    pool.query(queryText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((error) => {
            console.log('GET /songs failed', error);
            res.sendStatus(500);
            
        })
})

songsRouter.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "songs"
            ("title", "length", "released")
        VALUES
            ($1, $2, $3)
        `;

    let queryParams = [
        req.body.title,
        req.body.length,
        req.body.released
    ];

    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('POST failed', error);
            res.sendStatus(500);
        })
    
    });


    module.exports = songsRouter;