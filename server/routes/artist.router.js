const express = require('express');
const pg = require('pg');
const artistRouter = express.Router();
const pool = require('../modules/pool');