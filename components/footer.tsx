import React from 'react';
import Link from 'next/link';

// Componente Footer
const Footer = () => {
  // Array para los enlaces del footer
  const links = [
    { name: 'Términos', href: '/terms' },
    { name: 'Privacidad', href: '/privacy' },
    { name: 'Mapa del sitio', href: '/sitemap' },
  ];

  return (
    // Pie de página con color de fondo personalizado
    <footer className="bg-background-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal con diseño responsive: centrado y espacio entre elementos */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          
          {/* Derechos de autor */}
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Proyecto Base Next.js. Todos los derechos reservados.
          </p>

          {/* Enlaces legales */}
          <div className="flex space-x-6">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm text-gray-400 hover:text-primary-brand transition duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
