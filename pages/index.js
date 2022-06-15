import Link from 'next/link'
import Layout from '../components/layout'
import { useEffect,useState } from 'react';
export default function Home({ jsonData }) {
  const [data, setData] = useState({});
  return (
    <Layout>
    <div className="row">
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
  return {props: {jsonData}}
}