import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function getCart(){
    const Item = await prisma.checkedItem.findMany();
    return Item
}


export default async function handler(req, res){
    // const Item = await prisma.item.findMany();
    Item = await getCart()
    res.json(Item)
    // res.json("Hello")
}