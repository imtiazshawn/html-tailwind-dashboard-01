tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#24447f",
      },
    },
  },
};

function toggleDarkMode() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);

  const toggleButton = document.getElementById("darkModeToggle");
  const toggleButtonMobile = document.getElementById("darkModeToggleMobile");
  const newIcon = newTheme === "light" ? "🌙" : "☀️";
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
  const isCollapsed = sidebar.classList.contains("w-20");

  sidebar.classList.toggle("w-64");
  sidebar.classList.toggle("w-20");

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
