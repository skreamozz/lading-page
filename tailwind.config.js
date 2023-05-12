/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        "500px": "500px",
        "400px": "400px",
        "500px": "500px",
        "700px": "700px",
        "900px": "900px",
      },
      backgroundImage: {
        "logo-facebook": "url(../src/imgs/facebook.png)",
        "logo-instagram": "url(../src/imgs/instagram.png)",
        "logo-twitter": "url(../src/imgs/twitter.png)",
        "logo-user": "url(../src/imgs/user.png)",
        "img-1": "url(../src/imgs/img1.jpg)",
        "img-2": "url(../src/imgs/img2.jpg)",
        "img-3": "url(../src/imgs/img3.jpg)",
        "img-banner": "url(../src/imgs/imgBanner.jpeg)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
