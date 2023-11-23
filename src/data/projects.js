import imageWeblog from "../../public/images/weblogal.png";
import imageCourses from "../../public/images/courses.png";
import employees from "../../public/images/2311.png";
import fsconf from "../../public/images/fsconf.png";
import phrase from "../../public/images/phrase.png";
import circle from "../../public/images/circle.png";
import gallery from "../../public/images/gallery.png";
import webapp from "../../public/images/webapp.png";

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
  {
    title: "Employees API",
    description:
      "This project is a sophisticated web application meticulously crafted to manage and exhibit a comprehensive list of students, embodying the epitome of dynamic and responsive design. It masterfully employs the foundational trio of web development: HTML for structuring content, CSS for styling and visual appeal, and JavaScript for interactivity and functionality, thereby creating a seamless and intuitive user experience.",
    url: "https://parselinho.github.io/employees/",
    github: "https://github.com/Parselinho/employees",
    image: `${employees}`,
    frontendList: [
      {
        listTitle: "Dynamic Student Listing:",
        listDescription: `The application populates a grid with student profiles, including photos, names, email addresses, and registration dates. This data is dynamically inserted into the HTML using JavaScript, enhancing the interactivity of the page.`,
      },
      {
        listTitle: "Pagination",
        listDescription: `The student list is paginated to improve usability, with the capability to display a specified number of student profiles per page. This is achieved through JavaScript, which dynamically creates and manages pagination buttons based on the total number of students.`,
      },
      {
        listTitle: "Search Functionality",
        listDescription: `A search bar allows users to filter the student list in real-time. As users type a name, the list updates to display only those entries that match the search query, providing a seamless and efficient user experience.`,
      },
      {
        listTitle: "Responsive Design",
        listDescription: `he CSS styling, aided by media queries, ensures that the application is fully responsive. It adapts to various screen sizes, making it accessible on both desktop and mobile devices.`,
      },
      {
        listTitle: "Stylish Aesthetics",
        listDescription: `The application uses a modern color palette and fonts (imported from Google Fonts), along with CSS transitions for smooth visual effects, contributing to a professional and polished look.`,
      },
    ],
  },
  {
    title: "FSConference",
    description:
      "This project presents a detailed registration form for a Full Stack Conference, a task that allowed me to focus primarily on enhancing my JavaScript skills. While the CSS styling was sourced from Team Treehouse, my contribution centered on the dynamic and interactive aspects of the web form. Using JavaScript, I implemented features such as real-time validation of form fields, conditional display of form elements, and the calculation of total costs for selected activities. This project was an invaluable opportunity for me to delve deeper into JavaScript, particularly in areas of event handling and DOM manipulation. It underscored my capability to create engaging, interactive web experiences, while the CSS provided by Team Treehouse ensured the form was also visually appealing and responsive.",
    url: "https://parselinho.github.io/FSConference/",
    github: "https://github.com/Parselinho/FSConference",
    image: `${fsconf}`,
    frontendList: [
      {
        listTitle: "Dynamic Elements",
        listDescription: `The form is designed to be interactive, with elements like job role selections, T-shirt design choices, and activity checkboxes, offering users a customized experience.`,
      },
      {
        listTitle: "Accessibility and Semantics",
        listDescription: `Semantic HTML elements and attributes enhance the form's accessibility, making it usable for a diverse range of users, including those relying on screen readers.`,
      },
      {
        listTitle: "Enhanced Interactivity",
        listDescription: `The JavaScript file adds dynamic behavior to the form. It includes scripts to focus on the first input field on load, dynamically show or hide the 'other job role' input, and manage T-shirt color options based on the selected design.`,
      },
      {
        listTitle: "Real-Time Validation and Cost Calculation",
        listDescription: `JavaScript is used for real-time validation of form fields like name, email, and credit card information, and for calculating the total cost of selected activities.`,
      },
    ],
  },
  {
    title: "Phrase Hunter",
    description:
      "In this project, I developed an engaging and interactive web game titled 'Phrase Hunter'. The game challenges players to guess a hidden phrase, similar to the classic Hangman game. I implemented the game logic using vanilla JavaScript, focusing on object-oriented programming principles.",
    url: "https://parselinho.github.io/Phrase-Hunter/",
    github: "https://github.com/Parselinho/Phrase-Hunter",
    image: `${phrase}`,
    frontendList: [
      {
        listTitle: "Dynamic Web Game Mechanics",
        listDescription: `In the 'Phrase Hunter' game, I designed and implemented dynamic game mechanics using JavaScript. This involved crafting a seamless user experience where game states change based on user interaction, managing game logic, and updating the UI in real-time to reflect the progress and outcomes of the game.`,
      },
      {
        listTitle: "Object-Oriented JavaScript",
        listDescription: `I utilized Object-Oriented Programming (OOP) principles in JavaScript to structure the game's functionality. This approach involved creating classes for different game components - 'Phrase' for phrase management and 'Game' for overall game operation, ensuring a modular, maintainable, and scalable codebase.`,
      },
      {
        listTitle: "Interactive UI Elements",
        listDescription: `The project highlights my skills in creating interactive UI elements. I developed an on-screen keyboard that responds to both mouse clicks and physical keyboard inputs, providing an immersive and accessible gaming experience for different user preferences.`,
      },
      {
        listTitle: "Enhanced Accessibility",
        listDescription: `A key focus of the project was enhancing accessibility. I implemented features like focus states and keyboard navigation, making the game inclusive and user-friendly for a broad audience, including those relying on assistive technologies.`,
      },
    ],
  },
  {
    title: "Circles",
    description:
      "In this project, titled 'Circles UI Kit', I explored and integrated Sass for the first time in my web development studies. The project features a comprehensive UI kit, designed to provide a solid foundation for web design projects. Emphasizing a clean and refreshing aesthetic, the UI kit includes a variety of elements such as typography, buttons, form elements, and a responsive grid system. By employing Sass, I was able to streamline the styling process, making the CSS more maintainable and scalable. This was crucial in handling the kit's diverse components, from basic typography to complex grid layouts.",
    url: "https://parselinho.github.io/circleProject/",
    github: "https://github.com/Parselinho/circleProject",
    image: `${circle}`,
    frontendList: [
      {
        listTitle: "Sass Integration and Styling",
        listDescription: `This project marked my initial foray into using Sass, a powerful CSS preprocessor. The focus was on leveraging Sass to create an efficient and manageable styling workflow. Through this experience, I enhanced my skills in organizing CSS architectures and utilizing Sass features like variables, mixins, and nested rules. This approach significantly improved the project's maintainability and scalability, especially in styling complex UI components and ensuring a consistent design theme across the 'Circles UI Kit'.`,
      },
    ],
  },
  {
    title: "Gallery",
    description:
      " I created 'Gal Photo Gallery', a visually captivating and interactive photo gallery website. The heart of the gallery is a grid layout showcasing a collection of photographs, each accompanied by a descriptive caption. A key feature of this gallery is the custom search functionality implemented in JavaScript, allowing users to filter photos based on keywords found in their captions. The search enhances the user experience by dynamically displaying only those images that match the user's query. The layout was meticulously styled using CSS, with a focus on creating a responsive grid that adapts to different screen sizes. The integration of the 'baguetteBox' library provided a sleek and intuitive lightbox effect for viewing images, elevating the overall aesthetic and functionality of the gallery. ",
    url: "https://parselinho.github.io/galleryProject/",
    github: "https://github.com/Parselinho/galleryProject",
    image: `${gallery}`,
    frontendList: [
      {
        listTitle: "Interactive Photo Gallery Creation",
        listDescription: `In the 'Gal Photo Gallery' project, I focused on developing a user-friendly and visually engaging photo gallery. This involved creating an interactive search functionality using JavaScript, allowing users to filter images based on captions. I employed CSS to design a responsive grid layout, ensuring the gallery's adaptability across different devices. The integration of the 'baguetteBox' library for lightbox effects further enhanced the viewing experience. This project highlights my skills in combining JavaScript and CSS to deliver a seamless and dynamic user interface, showcasing my proficiency in front-end web development and design.`,
      },
    ],
  },
  {
    title: "WebApp",
    description:
      "In this project, I developed an advanced web application dashboard, showcasing my skills in creating a rich user interface with diverse functionalities. Key features include an alert banner with dismissible alerts, implemented in JavaScript, enhancing the user experience through dynamic interaction. The dashboard includes interactive data visualizations such as a line graph, bar graph, and doughnut chart, created using Chart.js to display various data metrics. These interactive charts offer insights into traffic patterns, daily activity, and mobile user demographics. I also implemented an autocomplete search functionality for user messaging, enhancing the usability of the dashboard. The project demonstrates my proficiency in JavaScript for creating interactive elements and my ability to integrate third-party libraries for data visualization. The CSS, structured with grid and flexbox layouts, ensures a responsive and organized presentation of the dashboard components.",
    url: "https://parselinho.github.io/webApp/",
    github: "https://github.com/Parselinho/webApp",
    image: `${webapp}`,
    frontendList: [
      {
        listTitle: "Advanced Web Application Dashboard Development",
        listDescription: `This project showcases my ability to create a comprehensive web application dashboard with multiple interactive features. I implemented a JavaScript-based alert system for dynamic notifications and integrated Chart.js for diverse data visualizations, including line, bar, and doughnut charts. These elements provide valuable insights and enhance user interaction. The project also features an autocomplete functionality for efficient user messaging, demonstrating my skill in enhancing user experience through JavaScript. The responsive design was meticulously crafted using CSS grid and flexbox layouts, ensuring seamless adaptability across various devices. This dashboard project exemplifies my expertise in front-end development, emphasizing interactive design and data presentation.`,
      },
    ],
  },
];

export default projects;
