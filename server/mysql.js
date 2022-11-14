const mysql = require('mysql');

var pool = mysql.createPool({    
    "host": "localhost",
    "port": 3306,
    "driver": "MySQL",
    "database": "patients-db",
    "user": "root",
    "password": "daniel*302104",
    "name": "db"    
});


exports.pool = pool;