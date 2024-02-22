//PostgreSQL


import Client from "bg";

// Details to connect

const db = new Client({
    user: "username",
    host: "localhost",
    database: "mydatabase",
    password: "password",
    port: 5432,
});

db.connect();

// writing SQL code

db.query("SELECT * FROM users", (err, res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    }else{
        console.log("User data:", res.rows);
    }
    //closing connection
    db.end();
});