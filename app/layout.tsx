import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/loginModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BNB",
  description: "Simillar AirBnb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <RegisterModal />
        <LoginModal />
      </body>
    </html>
  );
}
