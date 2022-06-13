import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res){
    const Item = await prisma.item.findMany();
    res.json(Item)
    // res.json("Hello")
}