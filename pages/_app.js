import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'
import { UserProvider } from '@auth0/nextjs-auth0'
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
    return (
    <UserProvider>
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script strategy="lazyOnload">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                });
            `}
        </Script>
        <Component {...pageProps} />
    </UserProvider>
    )
}

export default MyApp