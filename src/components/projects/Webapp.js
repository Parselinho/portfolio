import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class WebApp {
  constructor() {
    this.data = projects[7];
  }
  render() {
    return renderProject(this.data);
  }
}

export default WebApp;
