/** @type {import('tailwindcss').Config} */
module.exports = {
  // Archivos donde Tailwind buscará clases (incluyendo src/app y src/components)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Personalizaciones de la paleta de colores y espaciado
    extend: {
      colors: {
        'primary-brand': '#007bff', // Azul corporativo personalizado
        'secondary-accent': '#6c757d', // Gris acento
        'background-dark': '#1c1e21', // Fondo oscuro para el footer/navbar
      },
      spacing: {
        '18': '4.5rem', // Espaciado personalizado (72px)
        '128': '32rem', // Espaciado grande
      },
      // Usando 'inter' como fuente predeterminada (generalmente ya configurada por Next.js)
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  // Nota: En Tailwind v4, las utilidades predeterminadas
  // como 'darkMode' se configuran en esta capa, si es necesario.
};
