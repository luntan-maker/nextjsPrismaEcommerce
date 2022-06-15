import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();


export async function getDatum(id){
    const Item = await prisma.item.findUnique({
        where: {
            id: id
        }
    });
    return Item
}

export default async function handler(req, res){
    const Item = await getDatum(parseInt(req.query.id))
    res.json(Item)
}