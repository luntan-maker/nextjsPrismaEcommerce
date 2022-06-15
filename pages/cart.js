import Layout from '../components/layout'

export default function FirstCart({arr, arr2}) {
    return(
        <Layout>
             {arr.map((a, i)=>{
                 return (
                     <div id={a.id}>
                        <img src={a.image} width={150} height={200} display="block" alt={a.image}/>
                        Name: {a.title}, Price: {a.price}, Count: {arr2[i].count}
                        <button onClick={deleteItem}>Delete item</button>
                        <br />
                     </div>
                 )
             })}
             {/* <Link href="/checkout"><Image src="/checkout.png" width={200} height={100} alt="Checkout image"/></Link> */}
            <button onClick={goToCheckout}>Checkout</button>
        
        </Layout>
    )

    
    
}

import {getCart} from '../pages/api/getCart'
import {getDatum} from '../pages/api/item'

export async function getServerSideProps(context) {
    const cartData = await getCart()
    var arr = []
    var arr2 = []
    console.log("hello")
    const test = await Promise.all( await cartData.map(async (datum) =>{
        const dat = await getDatum(datum.id)
        arr.push(dat)
        arr2.push(datum)
        return dat
    }))
    console.log(test)
    console.log(arr)
    return{
        props: {arr2, arr}
    }
}
function goToCheckout(){
    window.location="/checkout"
}


async function deleteItem(e){
    const id = e.target.parentNode.id
    console.log(id)
    const temp = await fetch("/api/deleteFromCart"+"/?id="+id)
    location.reload();
    // return false;
}