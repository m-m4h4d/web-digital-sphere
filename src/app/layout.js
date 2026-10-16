import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { NavBar, Footer } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Web Digital Sphere",
    template: "%s | Web Digital Sphere",
  },
  description: "Web Digital Sphere Clone Project for Next JS practice/development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
