import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
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
      screens: {
        'desktop': '1440px',
        'mobile': '400px',
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
        'beige': '#EDE7DE',
        'green-1': '#D4EDE4',
        'green-2': '#A1CEC5',
        'green-3': '#025A4E',
        'green-4': '#4C6763',
        'green-5': '#364442',
        'green-6': '#233831'
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      fontFamily: {
        'mabry-pro': "Mabry Pro",
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
