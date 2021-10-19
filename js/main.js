const themeChangerBtn = document.getElementById("themeBtn");
const logo = document.querySelector(".logo");
const mainImg = document.getElementById("mainImg");

themeChangerBtn.addEventListener("click", () => {
  if (themeChangerBtn.classList.contains("bx-sun")) {
    //   Icons  Change
    themeChangerBtn.classList.remove("bx-sun");
    themeChangerBtn.classList.add("bx-moon");

    // Color CHange
    document.querySelector("body").classList.add("lightTheme");

    // Logo & Main container Image Change
    logo.querySelector("img").setAttribute("src", "./img/light_logo.png");
    mainImg.setAttribute("src", "./img/light_main.png");
  } else {
    themeChangerBtn.classList.add("bx-sun");
    themeChangerBtn.classList.remove("bx-moon");

    document.querySelector("body").classList.remove("lightTheme");

    // Logo & Main container Image Change
    logo.querySelector("img").setAttribute("src", "./img/dark_logo.png");
    mainImg.setAttribute("src", "./img/dark_main.png");
  }
});
