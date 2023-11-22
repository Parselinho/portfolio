const renderProject = (project) => {
  const backendList = project.backendList
    .map(
      (item) => `
    <li>${item.listTitle}<p>${item.listDescription}</p></li>`
    )
    .join("");

  const frontList = project.frontendList
    .map(
      (item) => `
    <li>${item.listTitle}<p>${item.listDescription}</p></li>`
    )
    .join("");

  return `
       <div class="heroContainer">
        <section class="hero">
            <div class="projectFlex">
                <figure class="figure">
                    <img src="${project.image}" alt="${project.title} image" loading="lazy">
                    <figcaption class="offscreen">${project.url}</figcaption>
                </figure>
                <h2 class="texth2">${project.title}</h2>
                <nav class="projectNav">
                    <a href='${project.github}' target="_blank" rel="noopener" title="navigate to my github profile">GitHub Code</a>
                    <a href='${project.url}' target="_blank" rel="noopener" title="navigate to the project website">Project Site</a>
                </nav>
            </div>
            <p class="texth2">${project.description}</p>
            <div class="textBold">
                <h3>Technologies and Packages for the Backend:</h3>
                    <ul>${backendList}</ul>
                <h3>Technologies and Packages for the Frontend:</h3>
                    <ul>${frontList}</ul>
            </div>
        </section>
       </div> 
    `;
};

export default renderProject;
