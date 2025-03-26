import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#4CAF50", color: "#FFF", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#FFF", fontSize: "14px" }}
      expires={365}  // Number of days before the cookie expires
      onAccept={() => {
        // Add functionality when user accepts cookies
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        // Add functionality when user declines cookies
        document.cookie = "user_cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=https://fliegerclub-sbk.netlify.app;"
        document.cookie = "other_cookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=https://fliegerclub-sbk.netlify.app;"
        console.log("Cookies declined");
      }}
    >
      Um unsere Webseite für Sie optimal zu gestalten und fortlaufend verbessern zu können, verwenden wir Cookies. 
      Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrer Festplatte dem von Ihnen verwendeten Browser zugeordnet gespeichert werden und durch welche der Stelle,
      die den Cookie setzt (hier durch uns), bestimmte Informationen zufließen. 
      Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. 
      Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen. 
      Rechtsgrundlage für die Verwendung von Cookies ist Art. 6 Abs. 1 Satz 1 lit f) DSGVO. 
      Durch die weitere Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu. 
      Wenn Sie mit der Verwendung von Cookies Einverstanden sind, und diesen Hinweis ausblenden wollen, klicken Sie bitte auf 'Akzeptieren'. 
      Die Datenschutzerklärung ist hier einsehbar: <Link href="/datenschutz/"style={{ color: "#4CAF50" }}><a>Datenschutzerklärung</a></Link>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
