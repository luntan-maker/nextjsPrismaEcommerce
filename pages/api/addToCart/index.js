import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient();


export async function updateCart(id, count){
    const Item = await prisma.checkedItem.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    
    console.log(Item)
    // If item is nothing create
    if(Item == null){
        const Item = await prisma.checkedItem.create({
            data: {
                id: parseInt(id),
                count: parseInt(count),    
            }
        })
    }
    // If item is not nothing update
    else{
        const Item = await prisma.checkedItem.update({
            where: {
                id: parseInt(id),
            },
            data: {
                count: parseInt(count)
            },
    })
}
}

export default async function handler(req, res){
    const Item = await updateCart(req.query.id, req.query.count)
    console.log(Item)
    res.json("Hello")
}