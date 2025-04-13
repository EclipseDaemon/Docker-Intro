const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
