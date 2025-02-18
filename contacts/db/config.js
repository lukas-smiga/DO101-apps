require('dotenv').config();


const USER = process.env.USER
const PASS = process.env.PASS
const DB = process.env.DB

const DB_CONFIG = 'postgresql://' + USER + ':' + PASS + '@contactsdb.svc.cluster.local:5432/' + DB;
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }