import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'desktop': '70rem',
        'mobile': '22.5rem', 
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-blue': '#8794C0',
        'medium-blue': '#5A6794',
        'dark-blue': '#1C2135',
        'light-grey': '#E7E9EE',
      },
      fontFamily: {
        'mabry-pro': "Mabry Pro",
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '700',
      },
      fontSize: {
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '3.25rem',
      },
    },
  },
  plugins: [],
}
export default config
