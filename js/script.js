const changeTheme = () => {
  document.documentElement.classList.toggle("dark");
};

window.onload = () => {
  const buttonDark = document.querySelector("#buttonDarkTheme");
  const buttonLight = document.querySelector("#buttonLightTheme");
  const buttonMenu = document.querySelector("#buttonMenu");
  const navMenu = document.querySelector("#navMenu");
  buttonLight.style.display = "block";
  let inicio = document.querySelector("#start");

  buttonDark.onclick = () => {
    changeTheme();
    buttonLight.style.display = "block";
    buttonDark.style.display = "none";
    inicio.style.backgroundImage = "url('./media/bg.svg')";
  };
  buttonLight.onclick = () => {
    changeTheme();
    buttonLight.style.display = "none";
    buttonDark.style.display = "block";
    inicio.style.backgroundImage = "url('./media/bgLight.svg')";
  };

  buttonMenu.onclick = () => {
    navMenu.classList.toggle("hidden");
  };

  buttonMenu.onblur = () => {
    setTimeout(() => {
      navMenu.classList.add("hidden");
    }, 100);
  };
};
