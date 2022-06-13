import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
export default function Home() {
  const items = [
    {
      image: "img1.jpg",
      description: "This is the first description for the first object",
      price: "$15"
    },
    {
      image: "img2.jpg",
      description: "This is the second description for the second object",
      price: "$5"
    }
  ]
  return (
    <Layout>
    <div className="row">
    {items.map((item)=>{
      return(
        <div className="col-md-2">
          <img src={item.image} width={150} height={200} display="block" alt={item.image}/>
          <center>{item.description}</center>
          <center>{item.price}</center>
        </div>
      )
    })}
    </div>
    
    </Layout>
  )
}
