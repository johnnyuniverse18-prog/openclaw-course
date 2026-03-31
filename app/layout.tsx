import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Operator One",
  description: "The AI Operator Playbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
        
        {/* ✅ Google Ads Tracking */}
        <head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18052619436"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-18052619436');
              `,
            }}
          />
        </head>

        <body>
          <div className="site-shell">
            <Nav />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}