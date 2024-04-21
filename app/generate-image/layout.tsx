import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Generate Image",
  description: "Generate awesome images for your blogs.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
