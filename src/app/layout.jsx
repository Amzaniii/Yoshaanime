// import { Geist, Geist_Mono } from "next/font/google";
import { Gabarito } from "next/font/google";
import "@/app/globals.css";
import "animate.css"
import Navbar from "@/components/Navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: "Yoshanimelist",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  // return (
  //   <html lang="en" suppressHydrationWarning={true}>
  //     <body
  //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
  //         <Navbar />
  //       {children}
  //     </body>
  //   </html>
  // );
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-neutral-900`} suppressHydrationWarning={true}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
