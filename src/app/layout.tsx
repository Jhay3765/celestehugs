import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Parisienne, Architects_Daughter } from "next/font/google";

const architects_Daughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-architects_Daughter",
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});
export const metadata: Metadata = {
  openGraph: {
    description: "Don't be mean !",
    images: ["/bear.jpg"],
  },
  title: "Celeste Hugs",
  description: "Don't be mean!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${architects_Daughter.variable} ${parisienne.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
