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

const PORT = process.env.PORT|| 80;
app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});
