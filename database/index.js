const pg = require("pg");

const client = new pg.Client(
  process.env.DATABASE || "postgres://localhost/blackpink"
);

client.connect();
module.exports = client;
