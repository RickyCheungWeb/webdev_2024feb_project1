/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#EFE6E6',
        'gray-100': '#DFCCCC',
        'gray-500': '#0E3129',
        'primary-100': '#DCEDE9',
        'primary-300': '#95C9BD',
        'primary-500': '#2b927b',
        'secondary-400': '#FFCD5B',
        'secondary-500': '#f4c53c',
      },
      
      backgroundImage: (theme) => ({
        'gradient-yellowred':
          'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
      }),
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      content: {},
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
   
  },
  plugins: [],
};
