import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Welcome to my Home",
  description: "Welcome Guest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
