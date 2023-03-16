import {Client} from "pg";

async function newClientConnection(): Promise<Client> {
  const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
  });
  await client.connect();
  return client;
}

export async function getAllHiragana() {
  const client = await newClientConnection();
  const qResult = await client.query('SELECT * FROM "Hiragana";');
  await client.end();
  return qResult.rows;
}
