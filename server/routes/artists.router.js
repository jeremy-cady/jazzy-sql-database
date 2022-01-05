const express = require('express');
const pg = require('pg');
const artistsRouter = express.Router();
const pool = require('../modules/pool');


artistsRouter.get('/', (req, res) => {
    const queryText = `SELECT * FROM "artists" ORDER BY "birthdate" DESC`;

    pool.query(queryText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((error) => {
            console.log('GET /artists failed', error);
            res.sendStatus(500);
            
        })
})

artistsRouter.post('/', (req, res) => {
    let queryText = `
        INSERT INTO "artists"
            ("name", "birthdate")
        VALUES
            ($1, $2)
        `;

    let queryParams = [
        req.body.name,
        req.body.birthdate
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


    module.exports = artistsRouter;