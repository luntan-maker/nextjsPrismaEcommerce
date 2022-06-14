import Layout from '../../components/layout'
import Image from 'next/image'
export default function Item({prodData}) {
    return (
    <Layout>
    {/* {console.log(prodData)} */}
        <div id={prodData.id}>
            <Image src={prodData.image} width={200} height={200}/> 

            {/* //src={`../../../public/${prodData.image}`} width={150} height={200} display="block" alt={prodData.image}/> */}

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
    {/* {prodData?.description} */}
    {/* {console.log(prodData)} */}
    </Layout>)
}


import {getDatum} from '../api/item/index'
// import {getData} from "../api/items/index"
// export async function getStaticPaths() {
//     const paths = getData();
//     paths.then(data=>console.log(data))
//     return {
//         paths: [
//             {params: {variable: [1]}}
//         ],
//         fallback: false,
//     }
    // return {
    //     paths,
    //     fallback: false,
    // }
// }

// export async function getStaticProps({ params} ) {
//     const prodData = getDatum(params.id)
//     return {
//         props: {
//             prodData
//         }
//     }
// }
export async function getServerSideProps(context) {
    // const prodData = await getDatum(2)
    const prodData = await getDatum(parseInt(context.params.id))
    // console.log(context)
    // console.log(prodData)
    return{
        props: {prodData}
    }
}
// export async function getServerSideProps({ params }){
//     if (parseInt(params.id) != NaN && !isNaN(params.id-0)){
//         const prodData = JSON.parse(JSON.stringify(getDatum(parseInt(params.id))))
//         return {
//             props:{
//                 prodData//JSON.parse(JSON.stringify(prodData)),
//             }
//         }
//     }
//     return {props:{}}
// }
// import {updateCart} from '../api/addToCart/index'
function addToCart(e){
    // Get id
    const id = e.target.parentNode.parentNode.id
    // get count
    const count=document.getElementById("itemsForCart");
    const countVal=count.value;

    console.log(id, countVal)

    fetch('/api/addToCart'+"/?id="+id+"&count="+countVal)
    // updateCart(id, countVal)

}