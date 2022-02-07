const express = require("express");
const client = require("./database");
const postlist = require("./html/postlist");
const profile = require("./html/post");
app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res, next) => {
  try {
    const data = await client.query("SELECT * FROM post");
    const posts = data.rows;
    res.send(postlist(posts));
  } catch (ex) {
    next(ex);
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const post = await client.query("select * from post where id=$1", [
      req.params.id,
    ]);
    res.send(profile(post.rows[0]));
  } catch (ex) {
    next(ex);
  }
});


const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
server.listen(PORT, LOCAL_ADDRESS, () => {
  const address = server.address();
  console.log('server listening at', address);
});