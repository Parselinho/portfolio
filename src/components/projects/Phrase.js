import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class PhraseHunter {
  constructor() {
    this.data = projects[4];
  }
  render() {
    return renderProject(this.data);
  }
}
export default PhraseHunter;
