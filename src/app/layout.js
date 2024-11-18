import localFont from "next/font/local";
import "./globals.css";
import ThemeSwitcher from "./ThemeSwitcher";
import ThProvider from "./ThProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GitHub Card",
  description: "Generate GitHub Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThProvider>
         <ThemeSwitcher  />
        {children}
         </ThProvider>
      </body>
    </html>
  );
}
