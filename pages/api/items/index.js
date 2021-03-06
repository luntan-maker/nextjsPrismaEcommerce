import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getData(){
    const Item = await prisma.item.findMany();
    return Item
}


export default async function handler(req, res){
    Item = await getData()
    res.json(Item)
}