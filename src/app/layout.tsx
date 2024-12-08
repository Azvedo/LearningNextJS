import "./globals.css";
import {Header} from "../components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aprendendo Next JS do zero",
  description: "Aprendendo Next JS do zero com Sujeito Programador!",
  openGraph: {
    title: "Aprendendo Next JS do zero",
    description: "Aprendendo Next JS do zero com Sujeito Programador!",
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>
        {/* children é onde as páginas são rederizadas */}
        {children} 
      </body>
    </html>
  );
}

//qualquer coisa que for colocado no layout.tsx será renderizado em todas as páginas