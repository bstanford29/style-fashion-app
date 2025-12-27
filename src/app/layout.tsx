import type { Metadata } from "next";
import "./globals.css";
import { OutfitProvider } from "@/context/OutfitContext";

export const metadata: Metadata = {
  title: "Dressy - Kids Dress-Up Game",
  description: "A fun dress-up game for kids to create amazing outfits!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OutfitProvider>
          {children}
        </OutfitProvider>
      </body>
    </html>
  );
}
