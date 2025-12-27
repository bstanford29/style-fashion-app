import type { Metadata } from "next";
import "./globals.css";
import { OutfitProvider } from "@/context/OutfitContext";
import { DragProvider } from "@/context/DragContext";
import DragPreview from "@/components/DragPreview";

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
          <DragProvider>
            {children}
            {/* Global drag preview that follows cursor */}
            <DragPreview />
          </DragProvider>
        </OutfitProvider>
      </body>
    </html>
  );
}
