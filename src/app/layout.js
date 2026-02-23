import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/UiUx/Header";
import Footer from "./Components/UiUx/Footer";
import Image from "next/image";
import Whatsapp from "./Components/Page-Components/Whatsapp";
import Helpline from "./Components/Page-Components/Helpline";
import FooterNew from "./Components/UiUx/FooterNew";
import Canonical from "./Canonical";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileFooterbar from "./Components/UiUx/MobileFooterbar";
import Script from "next/script";

// export const metadata = {
//   title: "Industrial Training in Mohali | Chandigarh | B2B Campus",
//   description: "Transform your future with our exceptional Industrial Training in Mohali and Chandigarh. Commit to excellence and shape a successful career. Start today!",
// };

const KodchasanMedium = localFont({
  src: [{ path: "../../public/fonts/Kodchasan-Medium.ttf" }],

  variable: "--font-kodchasan-medium"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <Canonical />
        <meta
          name="google-site-verification"
          content="2s7VVDUSWgOnw6WzgQoOhd-dz1K83tjl8UyA5mZdJRs"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {
                    pageLanguage: 'en',
                    autoDisplay: false
                  },
                  'google_translate_element'
                );
              }
            `
          }}
        />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                     })(window,document,'script','dataLayer','GTM-K59TF669');
                   `
          }}
        />
        {/* Google Translate Script */}
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
      </head>
      <body className={`${KodchasanMedium.variable}`} cz-shortcut-listen="true">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K59TF669"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <div id="google_translate_element" style={{ display: "none" }} />
        <Header />
        {children}

        <div className="hidden md:block fixed bottom-4 left-4 z-50">
          <Whatsapp />
        </div>
        <div className="hidden md:block fixed bottom-4 right-4 z-50">
          <Helpline />
        </div>
        <div className="block md:hidden fixed bottom-0 w-full z-50">
          <MobileFooterbar />
        </div>
        <FooterNew />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
