import Layout from '../../components/layout'
import Image from 'next/image'
export default function Item({prodData}) {
    return (
    <Layout>
        <div id={prodData.id}>
            <center><Image src={prodData.image} width={200} height={200}/> </center>
            <br />
            <center>{prodData.title}</center>
            <br />
            <center>{prodData.description}</center>
            <br />
            <center>{prodData.price} </center>
            <center>
                <label for="itemCount">How many?</label>
                <select name="itemCount" id="itemsForCart">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <br />
                <button onClick={addToCart}>Add to cart!</button>
            </center>
        </div>
    </Layout>)
}


import {getDatum} from '../api/item/index'

export async function getServerSideProps(context) {
    const prodData = await getDatum(parseInt(context.params.id))
    return{
        props: {prodData}
    }
}
function addToCart(e){
    const id = e.target.parentNode.parentNode.id
    const count=document.getElementById("itemsForCart");
    const countVal=count.value;

    console.log(id, countVal)

    fetch('/api/addToCart'+"/?id="+id+"&count="+countVal)

}