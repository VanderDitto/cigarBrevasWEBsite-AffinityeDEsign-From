module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },

theme:{
fontFamily:{
"sans": [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
  'bungee': ['Bungee Tint', 'sans'],
  "funnel": ['Funnel Display', 'sans'],
  "poiret": ["Poiret One" , "sans"],
  "bungee-shade": ["Bungee shade" , "sans"]

}

},extends:{
colors:{
  uyRed: "#B14B39",
}

}


};
