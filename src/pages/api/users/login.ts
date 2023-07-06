import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB, getDB, closeDB } from "../../../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectDB();
    const db = getDB();
    const collection = db.collection("users");

    if (req.method === "POST") {
      console.log("REQ BODY: ", req.body);
      const { username, password } = req.body;

      const found = await collection.findOne({ username });

      if (!found) return res.json({ message: `User ${username} not found` });

      if (found) {
        const match = password === found.password;
        if (!match) return res.json({ message: "wrong password" });
        if (match) return res.json({ message: "OK", user: found });
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    closeDB();
  }
}
