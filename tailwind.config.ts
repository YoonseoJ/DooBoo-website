import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        dooboo: {
          100: '#F8F5E7',
          400: '#BFB9A9',
          500: '#4A463B',
          600: '#414E4F',
          700: '#4F4441',
        }
      },
      brightness: {
        60: '.60',
        80: '.80',
        95: '.95',
        175: '1.75',
        165: '1.65',
      },
      spacing: {
        '240': '55rem',
        '0.5': '0.5px'
      }
    },
  },
  plugins: [],
}
export default config
