import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Weblogal {
  constructor() {
    this.data = projects[0];
  }
  render() {
    return renderProject(this.data);
  }
}
export default Weblogal;
