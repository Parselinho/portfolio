import projects from "../../data/projects.js";
import renderProject from "../../../utils/renderProject.js";

class Gallery {
  constructor() {
    this.data = projects[6];
  }
  render() {
    return renderProject(this.data);
  }
}

export default Gallery;
