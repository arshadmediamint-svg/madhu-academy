module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // Base blue color
          light: '#3B82F6', // Light blue
          dark: '#1E40AF',  // Dark blue
        },
        accent: {
          DEFAULT: '#FBBF24', // Base accent color (yellow)
          light: '#FDE68A',  // Light accent
          dark: '#B45309',   // Dark accent
        },
      },
      gradientColorStops: {
        'primary-gradient': ['#1E3A8A', '#3B82F6'], // Gradient from dark to light blue
        'accent-gradient': ['#FBBF24', '#FDE68A'], // Gradient for accent colors
      },
    },
  },
  variants: {},
  plugins: [],
};