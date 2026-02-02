import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hossain Rabbi - Full Stack Developep",
  description:
    "I’m a passionate Web Developer who loves turning ideas into functional, dynamic websites. Since 2017, I’ve been helping clients worldwide bring their visions to life — delivering clean, responsive, and high-performing web applications through Fiverr and Upwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}

        {/* <QueryClientProvider client={queryClient}> */}
        <ThemeProvider>{children}</ThemeProvider>
        {/* </QueryClientProvider> */}
        <Toaster />
      </body>
    </html>
  );
}
