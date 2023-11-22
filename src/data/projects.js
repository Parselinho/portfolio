import imageWeblog from "../../public/images/weblogal.png";
import imageCourses from "../../public/images/courses.png";

const projects = [
  {
    title: "Web Blog",
    description:
      "my primary focus was to enhance and showcase my JavaScript development skills. This project represents a significant milestone in my journey as a developer, marking my first foray into full-stack development. It was a self-driven initiative, undertaken after an extensive period of self-study and practical experimentation.",
    url: "https://weblogal.com",
    github: "https://github.com/Parselinho/BlogWebsite",
    image: `${imageWeblog}`,
    backendList: [
      {
        listTitle: "Node.js and Express",
        listDescription: `At the core of the backend is Express, a minimalist web framework for Node.js, enabling me to create a robust server-side application with ease. Express's simplicity and flexibility were instrumental in implementing RESTful APIs and server logic.`,
      },
      {
        listTitle: "mongoose with MongoDB",
        listDescription: `For data persistence, I used Mongoose, an elegant MongoDB object modeling tool. It provided a schema-based solution to model my application data, making data handling more structured and intuitive.`,
      },
    ],
    frontendList: [
      {
        listTitle: "Webpack",
        listDescription: `Leveraged as the module bundler and task runner, it efficiently compiled and bundled JavaScript modules. Its configurations were enhanced with webpack-dev-server for a smoother development experience, enabling features like hot module replacement.`,
      },
      {
        listTitle: "babel",
        listDescription: `Integrated with Webpack via babel-loader, Babel transpiled modern JavaScript code into a backward-compatible version for broader browser compatibility.`,
      },
      {
        listTitle: "axios",
        listDescription: `Chosen for HTTP requests, Axios provided a simple yet powerful way to interact with the backend API, handling data fetching and submission seamlessly.`,
      },
    ],
  },
  {
    title: "Course List",
    description:
      "In this comprehensive web project, my primary focus was on enhancing my React skills, leveraging a robust frontend and backend technology stack to create a dynamic and interactive web application.",
    url: "https://react2.online",
    github: "https://github.com/Parselinho/project-10",
    image: `${imageCourses}`,
    backendList: [
      {
        listTitle: "Express",
        listDescription: `A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.`,
      },
      {
        listTitle: "Sequelize",
        listDescription: `A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server, enabling a solid database integration.`,
      },
      {
        listTitle: "SQLite3",
        listDescription: `A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.`,
      },
      {
        listTitle: "Bootstrap",
        listDescription: `employed for styling, but the main emphasis was on React development rather than CSS.`,
      },
    ],
    frontendList: [
      {
        listTitle: "React",
        listDescription: `A JavaScript library for building user interfaces, enabling the creation of fast, scalable, and simple web applications.`,
      },
      {
        listTitle: "React Router",
        listDescription: `For declarative routing in React applications, enhancing navigation capabilities.
        Axios: Employed for making HTTP requests to the backend server.`,
      },
      {
        listTitle: "React Markdown",
        listDescription: `To render Markdown content.`,
      },
      {
        listTitle: "React Hook Form",
        listDescription: `For efficient, easy-to-use form handling.`,
      },
      {
        listTitle: "React Helmet",
        listDescription: `For managing the document head, useful for setting meta tags dynamically.`,
      },
    ],
  },
];

export default projects;
