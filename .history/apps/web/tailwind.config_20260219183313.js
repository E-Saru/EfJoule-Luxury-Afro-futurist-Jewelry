module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "../../packages/ui/**/*.{ts,tsx}", "../../packages/*/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: '#0b0b0b',
        molten: '#b8860b',
        indigoElectric: '#4b0082',
        bronzeIridescent: '#6b4c3b'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        ui: ['Inter var', 'sans-serif']
      }
    }
  },
  plugins: []
};
