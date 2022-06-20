import Layout from '../components/layout'

export default function success(){
    return(
        <Layout>
            {console.log(fetch("/api/deleteAllFromCart"))}
            <h2>You did it!</h2>
        </Layout>
    )
}