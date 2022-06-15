import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getCart(){
    const Item = await prisma.checkedItem.findMany();
    return Item
}


export default async function handler(req, res){
    Item = await getCart()
    res.json(Item)
}