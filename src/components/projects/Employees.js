import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Employees {
  constructor() {
    this.data = projects[2];
  }
  render() {
    return renderProject(this.data);
  }
}

export default Employees;
