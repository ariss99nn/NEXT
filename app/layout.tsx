import type { Metadata } from "next";
// Importar la fuente Inter (que usamos en tailwind.config.js)
import { Inter } from "next/font/google"; 
// Importar los estilos globales
import "./globals.css";

// Importar los componentes de layout
import Navbar from "../components/navbar"; 
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

// Metadata de la aplicación
export const metadata: Metadata = {
  title: "Proyecto Base Next.js Moderno",
  description: "Plantilla con Next.js 14, TypeScript, App Router y Tailwind CSS v4.",
};

// Componente Layout principal
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      {/* El body utiliza flexbox para asegurar que el footer quede al final (sticky footer) */}
      <body className={`${inter.className} min-h-full flex flex-col bg-gray-50`}>
        
        {/* 1. Navbar (Sticky en la parte superior) */}
        <Navbar />

        {/* 2. Contenido principal: Ocupa el espacio restante */}
        <main className="flex-grow max-w-7xl w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* 3. Footer (Se pega al final del contenido) */}
        <Footer />
        
      </body>
    </html>
  );
}