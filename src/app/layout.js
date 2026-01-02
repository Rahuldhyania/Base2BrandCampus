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

// export const metadata = {
//   title: "Industrial Training in Mohali | Chandigarh | B2B Campus",
//   description: "Transform your future with our exceptional Industrial Training in Mohali and Chandigarh. Commit to excellence and shape a successful career. Start today!",
// };

const KodchasanMedium = localFont({
  src: [{ path: "../../public/fonts/Kodchasan-Medium.ttf" }],

  variable: "--font-kodchasan-medium",
});


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head >
        <Canonical />
        <meta name="google-site-verification" content="2s7VVDUSWgOnw6WzgQoOhd-dz1K83tjl8UyA5mZdJRs" />
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
            `,
          }}
        />

        {/* Google Translate Script */}
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        ></script>
      </head>
      <body className={`${KodchasanMedium.variable}`}>
        <div id="google_translate_element" style={{ display: "none" }}></div>
        <Header />
        {children}
        <div className="fixed bottom-4 left-4 z-50">
          <Whatsapp />
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <Helpline />
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
