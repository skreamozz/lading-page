/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        "500px": "500px",
        "700px": "700px",
      },
      backgroundImage: {
        "logo-facebook": "url(../src/imgs/facebook.png)",
        "logo-instagram": "url(../src/imgs/instagram.png)",
        "logo-twitter": "url(../src/imgs/twitter.png)",
        "logo-user": "url(../src/imgs/user.png)",
        "img-1": "url(../src/imgs/img1.jpg)",
        "img-2": "url(../src/imgs/img2.jpg)",
        "img-3": "url(../src/imgs/img3.jpg)",
      },

      boxShadow: {
        "shadow-employee": "",
      },
    },
  },
  plugins: [],
};
