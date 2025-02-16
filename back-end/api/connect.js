// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://Luan_alves:luan2025@cluster0.hu2bc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("ReplicaSpotfy");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
