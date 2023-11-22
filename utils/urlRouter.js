import NotFound from "../src/components/404.js";
import About from "../src/components/About.js";
import Home from "../src/components/Home.js";
import Resume from "../src/components/Resume.js";

import Weblogal from "../src/components/projects/Weblogal.js";
import Courses from "../src/components/projects/Courses.js";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  document.addEventListener("click", handleNavClick);
  window.onpopstate = handlePopState;
  routeLocation();
}

function handleNavClick(e) {
  const { target } = e;
  if (
    target.matches("nav a") &&
    target.href.startsWith(window.location.origin)
  ) {
    e.preventDefault();
    route(e);
  }
}

const pages = {
  404: NotFound,
  "/": Home,
  "/about": About,
  "/weblogal": Weblogal,
  "/courses": Courses,
  "/resume": Resume,
};

function route(e) {
  e = e || window.event;
  e.preventDefault;
  window.history.pushState({}, "", e.target.href);
  routeLocation();
}

function routeLocation() {
  let location = window.location.pathname;
  if (location.length === 0) {
    location = "/";
  }
  const PageClass = pages[location] || pages[404];
  const pageInstance = new PageClass();
  document.getElementById("content").innerHTML = pageInstance.render();
}

function handlePopState() {
  routeLocation();
}

export default { initApp, routeLocation, handleNavClick, handlePopState };
