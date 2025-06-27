import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const MONGO_URI = "mongodb+srv://khaleddali73:tKQNFVVhD9utDdNv@khaledaldali.obfagur.mongodb.net/ernaehrung";

let api = express.Router();
let meals;

const initApi = async (app) => {
  app.set("json spaces", 2);
  app.use("/api", api);

  // Verbindung zur MongoDB-Datenbank
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db("ernaehrung");
  meals = db.collection("meals");
};

api.use(bodyParser.json());
api.use(cors());

api.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

// Alle Mahlzeiten abrufen
api.get("/meals", async (req, res) => {
  const data = await meals.find().toArray();
  res.json(data);
});

// Neue Mahlzeit hinzufügen
api.post("/meals", async (req, res) => {
  const meal = req.body;
  await meals.insertOne(meal);
  res.status(201).json(meal);
});

// Eine Mahlzeit löschen
api.delete("/meals/:id", async (req, res) => {
  const id = req.params.id;
  await meals.deleteOne({ _id: new ObjectId(id) });
  res.json({ success: true });
});

/* Catch-all route to return a JSON error if endpoint not defined.
   Be sure to put all of your endpoints above this one, or they will not be called. */
api.all("/*", (req, res) => {
  res.status(404).json({ error: `Endpoint not found: ${req.method} ${req.url}` });
});

export default initApi;
