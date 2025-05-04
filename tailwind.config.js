/** @type {import('tailwindcss').Config} */
import { defaultPalette } from './src/styles/theme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: defaultPalette.primary,
        secondary: defaultPalette.secondary,
        accent: defaultPalette.accent,
        neutral: defaultPalette.neutral,
        success: defaultPalette.success,
        error: defaultPalette.error,
        warning: defaultPalette.warning,
        info: defaultPalette.info,
      },
      backgroundColor: {
        'light-primary': defaultPalette.neutral[50],
        'light-secondary': defaultPalette.neutral[100],
        'dark-primary': defaultPalette.neutral[900],
        'dark-secondary': defaultPalette.neutral[800],
      },
      textColor: {
        'light-primary': defaultPalette.neutral[900],
        'light-secondary': defaultPalette.neutral[700],
        'dark-primary': defaultPalette.neutral[50],
        'dark-secondary': defaultPalette.neutral[300],
      },
      borderColor: {
        'light-default': defaultPalette.neutral[200],
        'light-hover': defaultPalette.neutral[300],
        'dark-default': defaultPalette.neutral[700],
        'dark-hover': defaultPalette.neutral[600],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};