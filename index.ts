import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    message: "API Running!!!",
  });
});

// POST /users {Creat an User}
app.post("/users", (req, res) => {
  const { username, email } = req.body;
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
