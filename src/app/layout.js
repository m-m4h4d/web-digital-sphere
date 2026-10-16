import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { roboto } from "@/fonts";
import theme from "@/theme";
import { NavBar, Footer, QuoteModalProvider } from "@/components";
import "./globals.css";

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
      <body className={roboto.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <QuoteModalProvider>
              <NavBar />
              <main>{children}</main>
              <Footer />
            </QuoteModalProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
