import "./globals.css";
import { Cormorant_Garamond, Lato } from "next/font/google";
import Header from "./components/Header";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lato.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}