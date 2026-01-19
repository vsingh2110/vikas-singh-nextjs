import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import GoogleTagManager from "./components/GoogleTagManager";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vikassingh.vercel.app'),
  title: "Vikas Singh | Frontend Developer & Digital Marketing Expert",
  description: "Portfolio of Vikas Singh - Frontend Developer specializing in React, Next.js, and Digital Marketing. Electrical Engineering graduate with expertise in web development and paid advertising.",
  keywords: ["Frontend Developer", "React", "Next.js", "Digital Marketing", "SEO", "WordPress", "Shopify", "Google Ads", "Facebook Ads"],
  icons: {
    icon: [
      { url: '/images/vikas-socialist.png', type: 'image/png' },
    ],
    shortcut: '/images/vikas-socialist.png',
    apple: '/images/vikas-socialist.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="facebook-domain-verification" content="ppomg0wfqwsah0s8saocqbejcmdwsb" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${poppins.variable} ${ubuntu.variable} font-sans antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-KWKQK668"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* Google Tag Manager */}
        <Script 
          id="google-tag-manager" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KWKQK668');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* GTM Route Change Tracker */}
        <GoogleTagManager />
        
        {children}
        <Analytics />
      </body>
    </html>
  )
}
