import clientPromise from "../../../lib/mongodb";
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from "dotenv";
import { compareHash, generateHash } from "../../hash";
import { generateToken } from "../../token";
dotenv.config()

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
    try {
        const client = await clientPromise;


        const encriptPassword = generateHash(req.body.password)
        const db = client.db("main");
        const user = await db
            .collection("users")
            .insertOne({"email": req.body.email, "password": encriptPassword})


        res.status(200).send({ message: "user created" })



    } catch (e) {
        console.error(e);
    }
}
