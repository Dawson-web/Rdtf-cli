import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });
import ReactQueryProvider from "../components/provider/ReactQueryProvider";

export const metadata: Metadata = {
  title: "Rdtf",
  description: "快速上手的",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-cover bg-gray-200 ",
          fontSans.variable
        )}
      >
        <MantineProvider>
          <Notifications position="top-center" />
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
