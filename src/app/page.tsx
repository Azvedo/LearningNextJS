import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Aprendendo Next JS do zero",
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

export default function Home() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
