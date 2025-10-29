"use client"; // <--- ESTO ES LA SOLUCIÓN: Indica que este componente debe renderizarse en el cliente

import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Usamos un icono popular para el botón de menú
import { useState } from 'react';

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lista de enlaces de navegación
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/about' },
    { name: 'Servicios', href: '/services' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    // Barra de navegación con color de fondo personalizado y sombra
    <nav className="bg-background-dark text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Título del proyecto */}
          <Link href="/" className="flex-shrink-0 text-xl font-bold text-primary-brand hover:text-white transition duration-200">
            Proyecto Base
          </Link>

          {/* Enlaces de escritorio (visibles en pantallas medianas y grandes) */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-primary-brand hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil (oculto por defecto, visible al hacer click) */}
      {/* Utiliza un div para encapsular y aplicar la lógica de visibilidad */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:bg-primary-brand hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
