import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();

export async function deleteItemFromCart(id){
    const Item = await prisma.checkedItem.delete({
        where: {
            id: parseInt(id),
        }
    });
    return Item
}


export default async function handler(req, res){
    const Item = await deleteItemFromCart(req.query.id)
    res.json(Item)
}