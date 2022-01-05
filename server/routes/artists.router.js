const express = require('express');
const pg = require('pg');
const songRouter = express.Router();
const pool = require('../modules/pool');


songRouter.get('/', (req, res) => {
    const queryText = `SELECT * FROM "artists"`;

    pool.query(queryText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((error) => {
            console.log('GET /artists failed', error);
            res.sendStatus(500);
            
        })
})

songsRouter.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "artists"
            ("artist_name", "year_born")
        VALUES
            ($1, $2)
        `;

    let queryParams = [
        req.body.artist_name,
        req.body.year_born
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


    modules.exports = songsRouter;