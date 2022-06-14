import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'

export default function FirstCart({arr, arr2}) {
    return(
        <Layout>
        <h1> First Cart</h1>;
        
            {console.log(arr2)}
             {console.log(arr)}
             {arr.map((a, i)=>{
                 {/* console.log(arr2[i].count) */}
                 return (
                     <div id={a.id}>
                        <img src={a.image} width={150} height={200} display="block" alt={a.image}/>
                        Name: {a.title}, Price: {a.price}, Count: {arr2[i].count}
                        <button onClick={deleteItem}>Delete item</button>
                        <br />
                     </div>
                 )
             })}
             <Link href="/checkout"><Image src="/checkout.png" width={200} height={100} alt="Checkout image"/></Link>
            {/* <img src={arr.image} width={150} height={200} display="block" alt={arr.image}/>
            <center>{arr.price}</center> */}
            {/* arr.map((a)=> {
                return(
                    <>
                        <img src={a.image} width={150} height={200} display="block" alt={item.image}/>
                        <center>{a.description}</center>
                        <center>{a.price}</center>
                    </>
                )
            }) */}
        
        </Layout>
    )

    
    
}

import {getCart} from '../pages/api/getCart'
import {getDatum} from '../pages/api/item'

export async function getServerSideProps(context) {
    // const prodData = await getDatum(2)
    const cartData = await getCart()
    var arr = []
    var arr2 = []
    console.log("hello")
    const test = await Promise.all( await cartData.map(async (datum) =>{
        const dat = await getDatum(datum.id)
        // console.log(dat)
        arr.push(dat)
        arr2.push(datum)
        return dat
    }))
    console.log(test)
    console.log(arr)
    // arr = JSON.parse(JSON.stringify(arr[0]))
    // console.log(context)
    // console.log(prodData)
    return{
        props: {arr2, arr}
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


async function deleteItem(e){
    const id = e.target.parentNode.id
    console.log(id)
    const temp = await fetch("/api/deleteFromCart"+"/?id="+id)
    location.reload();
    // return false;
}