import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Fsconference {
  constructor() {
    this.data = projects[3];
  }
  render() {
    return renderProject(this.data);
  }
}
export default Fsconference;
