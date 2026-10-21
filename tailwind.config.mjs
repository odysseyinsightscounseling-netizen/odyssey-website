/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // REPLACE THESE HEX CODES WITH YOUR EXACT SQUARESPACE COLORS
        brand: {
          primary: '#1E3A8A',   // Example: Your main button/accent color (e.g., Deep Navy)
          secondary: '#475569', // Example: Your secondary/footer color (e.g., Slate)
          light: '#F8FAFC',     // Example: Your background tint (e.g., Off-white/Cream)
          dark: '#0F172A',      // Example: Your primary text color
        }
      },
      fontFamily: {
        // Squarespace usually uses a distinct Header font and Body font. 
        // Example: Lora for Headers (serif), Inter for Body (sans-serif)
        heading: ['Lora', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}