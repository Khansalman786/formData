import express from "express";
import { readFileSync, writeFileSync } from "fs";
import cors from "cors";
const app = express();
app.use(cors());
// Connect whith Database

const port = 3000;
const dbFile = "./db.json";
const db = JSON.parse(readFileSync(dbFile, "utf-8")); // Add encoding
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <-- Add this line

const name = db.map((item) => item.Name);
// console.log(name);

// Define schema fields
const schema = {
  Name: "string",
  Country: "string",
  Gender: "string",
  Address: "string",
  Password: "string",
};

// Validate function
function validate(data) {
  if (!data) return false; // Fix for undefined
  for (const key in schema) {
    if (!(key in data) || typeof data[key] !== schema[key]) {
      return false;
    }
  }
  return true;
}

app.get("/users", (req, res) => {
  res.send(db);
});

app.post("/data", (req, res) => {
  const data = req.body;
  if (!validate(data)) {
    return res.status(400).send({ error: "Invalid data format" });
  }
  const newData = { ...data, id: Date.now() };
  db.push(newData);
  writeFileSync(dbFile, JSON.stringify(db, null, 2));
  res.send(newData);
});

app.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const index = db.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).send({ error: "User not found" });
  }
  db[index] = { ...db[index], ...data, id: Number(id) }; // Update fields, keep id
  writeFileSync(dbFile, JSON.stringify(db, null, 2));
  res.send(db[index]);
});

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  const index = db.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).send({ error: "User not found" });
  }
  const deleted = db.splice(index, 1)[0]; // Remove item from array
  writeFileSync(dbFile, JSON.stringify(db, null, 2));
  res.send(deleted); // Send deleted item
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
