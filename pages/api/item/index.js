import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();


export async function getDatum(id){
    // console.log(id==NaN)
    const Item = await prisma.item.findUnique({
        where: {
            id: id
        }
    });
    // console.log(Item)
    return Item
}

export default async function handler(req, res){
    // const Item = await prisma.item.findMany();
    const Item = await getDatum(parseInt(req.query.id))
    // console.log(Item)
    res.json(Item)
    // res.json("Hello")
}