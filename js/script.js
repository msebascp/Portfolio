const changeTheme = () => {
  document.documentElement.classList.toggle("dark");
  if (
    document.documentElement.classList.contains("dark") ||
    !("theme" in localStorage)
  ) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
};

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

const classScroll = [
  "dark:bg-dark-primary-1",
  "bg-light-primary-1",
  "border-b-2",
  "dark:border-dark-hover",
  "border-light-hover"
];
const classScroll0 = ["bg-transparent", "border-transparent"];

window.onload = () => {
  const buttonDark = document.querySelector("#buttonDarkTheme");
  const buttonLight = document.querySelector("#buttonLightTheme");
  const buttonMenu = document.querySelector("#buttonMenu");

  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
    buttonLight.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    buttonDark.classList.remove("hidden");
  }
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
