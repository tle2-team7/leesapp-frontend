/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary-dark-300': '#6AA13C',
      'primary-main-500': '#8EC54E',  
      'primary-light-700': '#B0D784',
      'surface-dark-100': '#DFDFDF',
      'surface-main-150': '#FCFCFC',
      'surface-light-200': '#FEFEFE',
      'background-900': '#EEEEEE',
      'secondary-dark-300': '#7193F4',
      'secondary-main-500': '#A6C9FD',  
      'secondary-light-700': '#C7DDFE',
    }, 
  }, 
  plugins: [],
};
