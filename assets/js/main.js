function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  const currentTheme = html.classList.contains("dark") ? "dark" : "light";
  const toggleButton = document.getElementById("darkModeToggle");
  const toggleButtonMobile = document.getElementById("darkModeToggleMobile");
  const newIcon = currentTheme === "light" ? "🌙" : "☀️";
  toggleButton.innerHTML = newIcon;
  toggleButtonMobile.innerHTML = newIcon;
}


function toggleSubSidebar() {
  const subSidebar = document.getElementById("subSidebar");
  const chevronIcon = document.getElementById("chevronIcon");

  if (subSidebar.style.maxHeight) {
    subSidebar.style.maxHeight = null;
    chevronIcon.style.transform = "rotate(0deg)";
  } else {
    subSidebar.style.maxHeight = subSidebar.scrollHeight + "px";
    chevronIcon.style.transform = "rotate(90deg)";
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("mainSidebar");
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  sidebar.classList.toggle("w-64");
  sidebar.classList.toggle("w-20");

  if (sidebar.classList.contains("w-64")) {
    main.classList.add("md:ml-64");
    main.classList.remove("md:ml-20");
    header.classList.add("expanded");
    header.classList.remove("collapsed");
  } else {
    main.classList.add("md:ml-20");
    main.classList.remove("md:ml-64");
    header.classList.add("collapsed");
    header.classList.remove("expanded");
  }

  const textElements = sidebar.querySelectorAll(".sidebar-text");
  textElements.forEach((el) => el.classList.toggle("hidden"));
}

function toggleMobileMenu() {
  const sidebar = document.getElementById("mainSidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.add("open");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("mainSidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}
