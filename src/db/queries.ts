import {Client} from "pg";

export async function getRandomHiragana() {
  const client = new Client();
  await client.connect();
  const qResult = client.query('SELECT * FROM "Hiragana"" ORDER BY RANDOM() LIMIT 1;');
  console.log(qResult);
}