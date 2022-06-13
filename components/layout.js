import Link from 'next/link'
import myImage from '../public/test_cart.jpg'


export default function layout({ children }) {
    return (
        <>
        <div className="col-md-2" style={{display: 'flex'}}>
            <h1 style={{ display: 'flex'}}><Link href="/"><a>Company</a></Link></h1>
            <Link style={{ display: 'flex'}} href="/cart"><a><img src="test_cart.jpg" width={100} height={100} alt="image"/></a></Link>
        </div>
            <main>{children}</main>
        </>
    )
}