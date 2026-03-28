import { Inter } from "next/font/google";
import "./globals.css";
import ToastProvider from './utils/toastMessage';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Portfolio",
  description: "Portfolio generated using next.js",
};
console.warn = () => { }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}><ToastProvider>
        {children}
      </ToastProvider></body>
    </html>
  );
}
