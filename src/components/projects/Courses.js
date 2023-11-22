import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Courses {
  constructor() {
    this.data = projects[1];
  }
  render() {
    return renderProject(this.data);
  }
}

export default Courses;
