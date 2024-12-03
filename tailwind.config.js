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
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
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
        'prim-text': '144px'
      }
    },
  },

  plugins: [],
}