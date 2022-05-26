module.exports = {
  mode:'JIT',
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '480px'},
      'md': {'min': '480px', 'max': '768px'},
      'lg': {'min': '768px', 'max': '1000px'},
      'xl': {'min': '1000px', 'max': '1220px'},
      '2xl': {'min': '1220px'},
    },
    fontFamily: {
      mont: ['Montserrat'],
      stix: ['STIX Two Text'],
    },
    extend: {
      spacing: {
        '128': '500px',
      }
    },
  },
  plugins: [],
}
