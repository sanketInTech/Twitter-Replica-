
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import prisma from "@/libs/prismadb";
import { error } from "console";

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse 
 ) {

  console.log("API called with method:", req.method);

  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed"});
  }

  try {
    const { email, username, name, password } = req.body;

    if (!email || !username || !name || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    //user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    //hash the password
    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data:{
        email,
        username,
        name,
        password: hashedPassword
      }
    });

    return res.status(200).json( { message: 'User created successfulyy', user});
  } catch (error) {
    console.error("Error in register API:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } 
}


