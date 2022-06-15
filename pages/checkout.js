import Layout from '../components/layout'


export default function checkout({arr2, arr}){
    return(
        <Layout>
            {console.log(arr2)}
            {arr.map((a, i)=>{
                
                 return (
                     <div>
                        <img src={a.image} width={150} height={200} display="block" alt={a.image}/>
                        Name: {a.title}, Price: {a.price}, Count: {arr2[i].count}, Total: $<span id={a.id}>{parseInt(a.price.slice(1,))*parseInt(arr2[i].count)}</span>
                        
                        <br />
                     </div>
                 )
             })}
             <div>Your total comes to: $
             {
                 getId(arr)
             }
            </div>
            <form>
                <label htmlFor="creditCard">Credit card:</label>
                <input type="text" id="creditCard"></input>
                <br />
                <label htmlFor="location">Location:</label>
                <input type="text" id="location"></input>
            </form>
            <button onClick={deleteAll}>Pay me!</button>
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

function deleteAll(){
    fetch("/api/deleteAllFromCart")
    window.location = "/"
}

function getId(arr){
    if (typeof window === 'object'){
        var total = 0
        arr.map((a)=>{
            // getId(a.id)
            const temp = document.getElementById(a.id)
            total += parseInt(temp.innerText)
        }
        )
        return total
        
            
    }
}