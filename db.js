const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "eventos",
    password: "Fernandes#@771",
    port: 8000,
});

module.exports = pool;