import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@auth0/nextjs-auth0'

export default function layout({ children }) {
    const { user } = useUser();
    console.log(user);
    return user ? (
        <>
        <div className="split">
            <Link href="/"><a><h2>Company</h2></a></Link>
            <div>
                <img src={user.picture} alt={user.name} width={50} height={50} />
                <a href="/api/auth/logout">Logout</a>
                <Link href="/cart"><Image src="/test_cart.jpg" width={50} height={50} alt="image"/></Link>
            </div>
        </div>
            <main>{children}</main>
        </>
    ) : (
        <>
        <div className="split">
            <Link href="/"><a><h2>Company</h2></a></Link>
            <div>
                <a href="/api/auth/login">Login</a>
                <Link href="/cart"><Image src="/test_cart.jpg" width={50} height={50} alt="image"/></Link>
            </div>
        </div>
            <main>{children}</main>
        </>
    )
}