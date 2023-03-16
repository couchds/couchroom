import { getAllHiragana } from "@/db/queries";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const result = await getAllHiragana();
  res.status(200).json({result: result});
}