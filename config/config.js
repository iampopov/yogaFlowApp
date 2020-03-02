require("dotenv").config();

module.exports = {
    "development": {
      "username": process.env.DBusername,
      "password": process.env.DBpassword,
      "database": process.env.DBdatabase,
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    "production": {
      "dialect": "mysql",
      "use_env_variable": "JAWSDB_URL"
    }
  }