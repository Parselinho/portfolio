import NotFound from "../src/components/404.js";
import About from "../src/components/About.js";
import Home from "../src/components/Home.js";
import Resume from "../src/components/Resume.js";

import Weblogal from "../src/components/projects/Weblogal.js";
import Courses from "../src/components/projects/Courses.js";
import Employees from "../src/components/projects/Employees.js";
import Fsconference from "../src/components/projects/Fsconference.js";
import PhraseHunter from "../src/components/projects/Phrase.js";
import Circle from "../src/components/projects/Circle.js";
import Gallery from "../src/components/projects/Gallery.js";
import WebApp from "../src/components/projects/Webapp.js";

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
  "/resume": Resume,
  "/weblogal": Weblogal,
  "/courses": Courses,
  "/employees": Employees,
  "/fsconference": Fsconference,
  "/phrase-hunter": PhraseHunter,
  "/circle": Circle,
  "/gallery": Gallery,
  "/webapp": WebApp,
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
