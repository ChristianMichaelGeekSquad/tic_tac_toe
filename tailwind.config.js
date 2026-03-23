/** @type {import('tailwindcss').Config} */
import TailWindPresets from 'nativewind/preset';

export const colors = {
  white: '#ffffff',
  black: '#0f0f0f',
  'muted-sage': '#E4EAD7',
  'muted-cocoa-brown': '#A68A74',
  'cocoa-brown': '#7B5E4A',
  'warm-netral': '#F6F2E9',
  'matcha-green': '#DDE6C8',
  'muted-orange': '#E6B17A',
  charcoal: '#3A3A3A',
  'olive-green': '#6E7F4F',
  vermillon: '#C9472D',
  'neutral-grey': '#BFC5B2',
  'darker-grey': '#7A7A7A',
  beige: '#D6CBB8',
};

/**
 * This is here in cases where we have dynamic colors and its not
 * registered in the DOM on load of our components due to
 * state change or due to an update on the DOM that causes these colors
 * to be rendered
 */
const safeColorList = Object.keys(colors);
const safeColorListGenerated = safeColorList.flatMap(color => [`bg-${color}`, `color-${color}`]);

const configuration = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [TailWindPresets],
  safelist: [
    ...safeColorListGenerated,
    'font-nunito-black',
    'font-nunito-bold',
    'font-nunito-reg',
    'font-nunito-light',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        'nunito-reg': 'Nunito-Regular',
        'nunito-bold': 'Nunito-Bold',
        'nunito-light': 'Nunito-Light',
        'nunito-black': 'Nunito-Black',
      },
      fontSize: {
        xxs: 11,
        xs: 12,
        sm: 13,
        'sm-1': 14,
        'sm-2': 15,
        'sm-3': 16,
        rg: 17,
        'rg-1': 18,
        md: 22,
        lg: 35,
        'lg-1': 30,
        'lg-2': 26,
        xl: 40,
      },
      margin: {
        '5p': '5%',
        '25p': '25%',
        '10p': '10%',
        '82p': '82%',
        '95p': '95%',
        '15p': '15%',
        '20p': '20%',
        '12p': '12%',
      },
      width: {
        '82p': '82%',
        '95p': '95%',
        '40pixel': '40px',
        '40p': '40%',
        '75p': '75%',
        '90p': '90%',
        '48p': '48%',
      },
      height: {
        '40pixel': '40px',
        '70pixel': '70px',
        '120pixel': '120px',
      },
      borderRadius: {
        '5p': '5%',
        '10pixel': '10px',
      },
    },
  },
  plugins: [],
};

export default configuration;
