import '../css/main.css';
import CookieConsentBanner from '../components/blocks/CookieConsentBanner/CookieConsentBanner';

export default function MyApp({ Component, pageProps }) {
   
    return (<>
         <CookieConsentBanner/>
         <Component {...pageProps}/>
   </>
       );
};
