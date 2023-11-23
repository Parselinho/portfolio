import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Circle {
  constructor() {
    this.data = projects[5];
  }
  render() {
    return renderProject(this.data);
  }
}

export default Circle;
