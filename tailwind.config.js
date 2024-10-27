/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'navbar':'#2A4563',
      'text_nav':'#ffff',
      'btn':'#018ABD',
      "btn_delete":'FF1414',
      "bg_solf":'#DDE8F0'
    },
    extend: {
      fontFamily:{
          robotos:["Roboto","sans-serif"]
      },
      fontSize:{
        text_prim:'96px',
        text_second:'64px',
        text_third:'56px'
      },
      borderRadius:{
        card:'',    
        nav: '',
        btncard:'',
        rounded_card:''
      },
      lineHeight: {
        'prim-text': '144px',
        '12': '3rem',
      }
    },
  },

  plugins: [],
}