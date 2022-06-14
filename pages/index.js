import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import { useEffect,useState } from 'react';
export default function Home({ jsonData }) {
  // const items = [
  //   {
  //     image: "img1.jpg",
  //     description: "This is the first description for the first object",
  //     price: "$15"
  //   },
  //   {
  //     image: "img2.jpg",
  //     description: "This is the second description for the second object",
  //     price: "$5"
  //   }
  // ]
  const [data, setData] = useState({});
  // useEffect (() => {
    // const response = fetch("http://localhost:3000/api/items")
    // fetch("http://localhost:3000/api/items")
    //   .then()
    // // const responseJson =  response.json()
    // // console.log(responseJson);
    // setData(responseJson)
  // })
  // console.log(jsonData)
  // const items =  fetch("http://localhost:3000/api/items")
  //                 .then((response) => response.json())
  //                 .then((data => {
  //                   return data
  //                 }))
  return (
    <Layout>
    <div className="row">

    {/* {console.log(data)} */}
    {jsonData.map((item)=>{
      return(
        <Link href={"/product/"+item.id}>
          <div className="col-md-2" id={item.id}>
            <img src={item.image} width={150} height={200} display="block" alt={item.image}/>
            <center>{item.description}</center>
            <center>{item.price}</center>
          </div>
        </Link>
      )
    })}
    </div>
    
    </Layout>
  )
}

import {getData} from './api/items/index'

export async function getServerSideProps(context) {
  const jsonData = await getData()
  // console.log(jsonData)
  return {props: {jsonData}}
}