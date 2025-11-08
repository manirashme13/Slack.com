/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      screens:{
        s3xs:"16rem",     //[256px]
        s2xs:"18rem",     //[288px]
        xs:"20rem",       //[320px]
        sm:"40rem",       //[640px]  
        md:"48rem",       //[768px]  
        lg:"64rem",       //[1024px]
        xl:"80rem",       //[1280px]
        s1xl:"90rem",     //[1440px]
        s2xl:"100rem",    //[1600px]
        s3xl:"120rem",    //[1920px]
        s4xl:"128rem",    //[2048px]
        s5xl:"148rem",    //[2368px]
        s6xl:"180rem",    //[2880px]
        s7xl:"200rem"     //[3200px]
      },
    extend: {},
  },
  plugins: [],
}