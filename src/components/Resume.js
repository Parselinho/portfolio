import image from "../../public/images/aqua2.png";
import treehouseSvg from "../../public/svg/treehouse.svg";

class Resume {
  render() {
    return `
        <div class="resumeMainContainer">
            <div class="resumeAndExperience">
          <section class="resumeHeader">

          <figure class="figureResume">
            <img src="${image}" alt="Gals Picture" loading="lazy">
            <figcaption class="offscreen">Gal Parselani</figcaption>
          </figure>

            <h2>Gal Parselani Profile Summary</h2>
            <p>Innovative and solutions-driven Full-Stack Developer with expertise in JavaScript, HTML, CSS, React, Node.js, Express, MongoDB, and SQL. Proven abillity to leverage advanced studies in front-end and full stack development to deliver impactful projects. Knows for exceptional problem-solving skills and a keen eye for technological advancements.</p>
          </section>

          <section class="resumeExperience">
            <h3>Professional Experience</h3>
            <h5>360 Affiliate LTD, Tel-Aviv — System Manager and Team Leader</h5>
            <p>November 2022 - Present</p>
            <ul>
                <li>    
                    Orchestrated traffic navigation using statistical analysis, enhancing conversion rates.
                </li>
                <li>    
                    Led a high-performance team to achieve ambitious goals based on data-driven insights.
                </li>
                <li>    
                    Implemented efficient systems and workflows, resulting in a significant increase in leads.
                </li>
                <li>    
                    Fostered an innovative technological culture, keeping the team abreast of industry advancements.
                </li>
            </ul>
                <div class="border"></div>
            <h5>Tomer & Alon Marketing and Publicity, Ramat Gan - Data Analyst</h5>
            <p>March 2019 - November 2022</p>
            <ul>
                <li>
                    Conducted in-depth data analysis to guide strategic decisions.
                </li>
                <li>
                    Developed executive dashboards and reports, improving visibility into performance metrics.
                </li>
                <li>
                    Collaborated with teams to refine data collection and reporting practices.
                </li>
                <li>
                    Ensured data quality and accuracy in decision-making processes.
                </li>
            </ul>
          </section>
          </div>
          <div class="bordersolid"></div>

          <section class="resumeSide">
            <h3>Education</h3>
  
            <h4><a href="https://www.ariel.ac.il/university/minisite/" target='_blank' rel="noopener" title="visit ariel website">Ariel University</a></h4>
            <p>Bachelor's Degree in Criminology and Middle Eastern Studies (Specialization in Terrorism)
            2016-2019</p>

            <div class="nopadding">
            <div class='logoAndHeading'>
            <img src="${treehouseSvg}" alt="treehouse logo" loading="lazy">
            <h4><a href="https://teamtreehouse.com" target='_blank' rel="noopener" title="visit treehouse website">teamTreeHouse</a></h4>
            </div>
            <p>TechDegree in Full Stack JavaScript, and Front End Web Development. 2022-2023</p>
            <div class="certDiv">
                <a href='https://www.credential.net/7a967360-dd18-4c50-ba1b-0bb865c6b2cc#gs.0q0eho' target='_blank' rel="noopener" title="navigate to the full stack certification">certification for FSJS</a>
                <a href='https://www.credential.net/1c3e2d8f-a879-46c6-a466-4b1eb0c9fc72#gs.0q0i5i' target='_blank' rel="noopener" title="navigate to the front end certification">certification for FEWD</a>
            </div>
            </div>

            <div class="border"></div>

            <div class='logoAndHeading'>
            <h3>Skills</h3>
            </div>
            <ul>
                <li>Proficient in Full-Stack Development, with a focus on JavaScript technologies.</li>
                <li>Strong analytical and problem-solving capabilities.</li>
                <li>Effective under pressure with a knack for efficient task execution.</li>
                <li>Excellent team leadership and project management skills.</li>
            </ul>
            <div class="border"></div>

            <h3>Languages:</h3>
            <ul>
                <li>Hebrew (Native)</li>
                <li>English (Highly Proficient)</li>
            </ul>
            <div class="border"></div>


            <h3>Millitary Service</h3>
            <p>Combat Intelligence Support, IDF (2009-2012)</p>
            <div class="border"></div>

            
            <h3>Volunteering</h3>
            <p>Active volunteer at Chabad House, Hatikva Neighborhood. Engaged in community services initiatives including meal preparation and distribution in Herzliya. also helped distribution in Rishon Leziyon at "Lichiot Bekavod"</p>
            <div class="border"></div>

        </section>

          <section class="resumeFinal">
            <h3>Seek Opportunities</h3>
            <p>Eager to bring my technical expertise, innovative mindset, and leadership qualities to a challenging programming role. Open to exploring to collaborative and dynamic work environments, where I can contribute to and drive forward-thinking projects.</p>
          <section>

          </div>
        `;
  }
}
export default Resume;
