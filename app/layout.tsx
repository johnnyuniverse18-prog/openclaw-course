import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "OpenClaw Academy",
  description: "A paid tutorial website starter for teaching OpenClaw."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Nav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
