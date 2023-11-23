import image from "../../public/images/aqua3.png";

class Home {
  constructor() {
    this.cardsData = [
      {
        title: "Web Blog",
        description: `In this project, I focused primarily on enhancing my JavaScript skills. While I did work with CSS and HTML, the CSS portion remains incomplete as my main objective was to refine my JavaScript expertise. I utilized Vanilla JavaScript, CSS, HTML, MongoDB (via Mongoose), and the Express framework. This was my initial full-stack project, undertaken after a considerable period of self-study and practice.`,
        url: "https://weblogal.com",
        href: "/weblogal",
      },
      {
        title: "Courses List",
        description: `In this project, I focused primarily on enchancing my React skills. While i also did work with Bootstrap, again the CSS part wasnt the main part of the project, but the react. I utilized React, css-Bootstrap, Express framework, Sequelize, SQLite3. this was my initial React Full Stack Project, undertaken after a considerable period of self-study practice. `,
        url: "https://react2.online",
        href: "/courses",
      },
      {
        title: "Employees API",
        description: `This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students. It is a quintessential example of dynamic and responsive design, employing the foundational trio of web development: HTML, CSS, and JavaScript, to create a seamless user experience.`,
        url: "https://parselinho.github.io/employees/",
        href: "/employees",
      },
      {
        title: "FSConference",
        description: `This project showcases a comprehensive registration form for a Full Stack Conference, where I honed my skills in creating dynamic and interactive web forms. The core of the project lies in JavaScript's interactivity and form validation logic, alongside building a responsive layout using CSS. Key technologies include HTML CSS and JavaScript.`,
        url: "https://parselinho.github.io/FSConference/",
        href: "/fsconference",
      },
      {
        title: "Phrase",
        description: `In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.`,
        url: "https://parselinho.github.io/Phrase-Hunter/",
        href: "/phrase-hunter",
      },
      {
        title: "Circle",
        description: `In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies.`,
        url: "https://parselinho.github.io/circleProject/",
        href: "/circle",
      },
      {
        title: "Gallery",
        description: `A visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption.`,
        url: "https://parselinho.github.io/galleryProject/",
        href: "/gallery",
      },
      {
        title: "WebApp",
        description: `The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics.`,
        url: "https://parselinho.github.io/webApp/",
        href: "/webapp",
      },
    ];
  }

  createCard(card) {
    return `
      <li class="card">
        <img src="${image}" alt='description' width="928" height="1312" loading="lazy"/>
        <div class='cardContainer'>
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <div class="cardLinks">
          <a href="${card.href}" title="navigate to the project page">More Info</a>
          <a href='${card.url}' target='_blank' rel="noopener" title="navigate to the project website">Visit Website</a>
          <div>
        </div>
      </li>
    `;
  }

  setCardData() {
    return this.cardsData.map(this.createCard).join("");
  }

  render() {
    return `
    <div class="homeContainer">
    <h2>Home Page</h2>
    <div class="homeDiv">
    <p>Hello! I'm an enthusiastic and self-driven junior developer, passionate about creating seamless web experiences. My journey in web development started with a deep curiosity and a do-it-yourself attitude, leading me to teach myself a diverse set of tools and technologies.</p>
    <p>With a solid foundation in HTML, CSS, and JavaScript, I craft responsive and user-friendly websites. My skill set extends to powerful backend development with Node.js, creating dynamic and interactive web applications. In addition, I have a growing expertise in React.js, which enables me to build efficient and modern front-end interfaces.</p>
    <p>I also possess a strong understanding of databases, both SQL and MongoDB, ensuring that the data driving my applications is well-structured and efficiently managed.</p>
    <p>Each project I undertake is an opportunity for growth and learning. I'm constantly expanding my knowledge and skills, driven by a passion for technology and a commitment to delivering high-quality work.</p>
    <p>Take a look around my portfolio to see a showcase of my development journey and the projects that fuel my growth as a developer.</p>
    <aside>
          <p>
            <b>**</b> I'd like to extend my gratitude to
            <a
              href="https://www.youtube.com/@DaveGrayTeachesCode"
              target="_blank"
              rel="noopener"
              title="visit dave youtube channel"
              >Dave Gray</a
            >
            for his contributions to the styling elements used in this project.
          </p>
        </aside>  
      </div>

    </div>

      <ul class="ul">${this.setCardData()}  </ul>

      `;
  }
}
export default Home;
