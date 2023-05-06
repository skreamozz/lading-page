/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-facebook": "url(../src/imgs/facebook.png)",
        "logo-instagram": "url(../src/imgs/instagram.png)",
        "logo-twitter": "url(../src/imgs/twitter.png)",
        "logo-user": "url(../src/imgs/user.png)",
      },
    },
  },
  plugins: [],
};
