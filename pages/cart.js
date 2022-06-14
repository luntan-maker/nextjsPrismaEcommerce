import Layout from '../components/layout'

export default function FirstCart({cartData}) {
    return(
        <Layout>
        <h1> First Cart</h1>;
        {
            console.log(cartData)
        }
        </Layout>
    )

    
    
}

import {getCart} from '../pages/api/getCart'
import {getDatum} from '../pages/api/item'

export async function getServerSideProps(context) {
    // const prodData = await getDatum(2)
    const cartData = await getCart()
    var arr = []
    console.log("hello")
    const test = await Promise.all( await cartData.map(async (datum) =>{
        const dat = await getDatum(datum.id)
        // console.log(dat)
        arr.push(dat)
        return dat
    }))
    console.log(test)
    console.log(arr)
    // console.log(context)
    // console.log(prodData)
    return{
        props: {arr}
    }
}

async function getProduct(id){
    
    const prodData = await fetch('/api/item'+"/?id="+id)
                        .then((response)=> response.json())
                        .then(data=>{
                            return data
                        } )
    return Promise.resolve(prodData)
}