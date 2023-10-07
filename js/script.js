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
  };
  buttonLight.onclick = () => {
    changeTheme();
    buttonLight.style.display = "none";
    buttonDark.style.display = "block";
  };

  buttonMenu.onclick = () => {
    buttonMenuOnClicked();
  };

  buttonMenu.onblur = () => {
    buttonMenuOnBlur();
  };
};

window.onscroll = () => {
  changeClassHeaderOnScroll();
};

const classScroll = [
  "dark:bg-blue-dark-2",
  "bg-stone-300",
  "border-b",
  "dark:border-gray-300",
  "border-blue-dark-2"
];
const classScroll0 = ["bg-transparent", "border-transparent"];

const buttonMenuOnClicked = () => {
  const header = document.querySelector("header");
  const navMenu = document.querySelector("#navMenu");
  navMenu.classList.toggle("hidden");
  if (window.scrollY == 0) {
    if (header.classList.contains(...classScroll)) {
      header.classList.remove(...classScroll);
    } else {
      header.classList.add(...classScroll);
    }
  }
};

const buttonMenuOnBlur = () => {
  const header = document.querySelector("header");
  setTimeout(() => {
    navMenu.classList.add("hidden");
  }, 100);
  if (window.scrollY == 0) {
    header.classList.remove(...classScroll);
  }
};

const changeClassHeaderOnScroll = () => {
  const header = document.querySelector("header");
  const navMenu = document.querySelector("#navMenu");
  // Verificar si la página ha sido desplazada más allá del umbral
  if (window.scrollY > 0) {
    header.classList.add(...classScroll);
    header.classList.remove(...classScroll0);
  } else {
    // Si estamos en la parte superior de la página
    if (navMenu.classList.contains("hidden")) {
      header.classList.remove(...classScroll);
      header.classList.add(...classScroll0);
    }
  }
};
