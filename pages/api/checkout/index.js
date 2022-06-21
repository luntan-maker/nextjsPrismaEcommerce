require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

import {getCart} from '../getCart'
import {getDatum} from '../item'

export default async function handler(req, res){
    const cartData = await getCart()
    var arr = []
    const test = await Promise.all( cartData.map(async (datum) =>{
        const dat = await getDatum(datum.id)
        arr.push({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: dat.title,
                },
                unit_amount: parseInt(dat.price.slice(1,))*100,
            },
            quantity: datum.count,
        })
    }))

    const session = await stripe.checkout.sessions.create({
        line_items: arr,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
    console.log(session.url)
    res.redirect(303, session.url);
}