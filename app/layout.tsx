import TopHeader from "@/Components/Header/TopHeader";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/Components/Header/Header";
import Provider from "@/lib/Provider";
import Footer from "@/Components/Footer/Footer";

//comiit
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bayer`a Edge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>
          <div className="">
          
            <TopHeader />
            <Header />
          
          
            <hr />
          </div>

          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
