import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from "dotenv";
import { compareHash } from "../../hash";
import { generateToken } from "../../token";
dotenv.config()

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await clientPromise;
        const db = client.db("main");
        const user = await db
            .collection("users")
            .findOne({"email": req.body.email})

        if (user) {
            let correctPassword = await compareHash(req.body.password, user.password)
            if(correctPassword) {
                const token = generateToken(user.email, user._id.toString())
                res.status(200).send({ message: "user found", token })
            }
        }

    } catch (e) {
        console.error(e);
    }
}
