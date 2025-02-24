"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./rashi/[name]/loading";
import ClientLayout from "./ClientLayout";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "𝒮𝑜𝒷𝒽𝒶𝑔𝓎𝒶",
  description: "Your trusted astrology consultation platform",
  icons: {
    icon: "/image 1.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRashiPage = pathname.startsWith("/rashi/");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Header />
          <ClientLayout>
            <main>{children}</main>
          </ClientLayout>
          {!isRashiPage && <Footer />} {/* Footer is hidden on rashi pages */}
        </Suspense>
      </body>
    </html>
  );
}
