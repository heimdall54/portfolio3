import Nav from "@/components/Nav";
import Header from "@/components/header";
import ParticleProvider from "@/context/ParticleConext";
import "@/styles/index.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ParticleProvider>
          <Header />

          <Nav />
          {children}
        </ParticleProvider>
      </body>
    </html>
  );
}
