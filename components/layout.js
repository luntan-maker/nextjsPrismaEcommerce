import Link from 'next/link'
import Image from 'next/image'


export default function layout({ children }) {
    return (
        <>
        <div className="split">
            <Link href="/"><a><h2>Company</h2></a></Link>
            <Link href="/cart"><Image src="/test_cart.jpg" width={50} height={50} alt="image"/></Link>
        </div>
            <main>{children}</main>
        </>
    )
}