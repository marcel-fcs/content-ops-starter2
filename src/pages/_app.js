import '../css/main.css';
import CookieConsentBanner from '../components/blocks/CookieConsentBanner/CookieConsentBanner' // Cookie-Banner importieren

export default function MyApp({ Component, pageProps }) {
    return (
        <>
    <CookieConsentBanner /> {/* Cookie-Banner-Komponente hier einfügen */}    
    <Component {...pageProps} />;
        </>
    )
}
