import React from "react";

const experienceContent = [
  {
    year: "April 2022 - December 2022",
    position: "Software Engineer",
    compnayName: "Coding Temple",
    details: `▪ Employed best coding practices and object-oriented programming techniques to work on different software development projects. ▪ Deployed 3 RESTful APIs using ReactJS and Flask in combination with PostgreSQL databases.
    ▪ Coordinated with various teams of colleagues to develop custom applications, including performing debugging activities and providing recommendations to improve user functionality.
    ▪ Designed and implemented RESTful API services for a full-stack drone inventory application, which persisted data in a PostgreSQL database using Python, Flask, and SQLAlchemy.▪ Employed best coding practices and object-oriented programming techniques to work on different software development projects. ▪ Deployed 3 RESTful APIs using ReactJS and Flask in combination with PostgreSQL databases. ▪ Coordinated with various teams of colleagues to develop custom applications, including performing debugging activities and providing recommendations to improve user functionality. ▪ Established set dates that each colleague’s component had to be completed and pushed by. ▪ Clearly corresponded with the team to effectively resolve merge conflicts on Github. ▪ Designed and implemented RESTful API services for a full-stack drone inventory application, which persisted data in a PostgreSQL database using Python, Flask, and SQLAlchemy.
    Skills: Redux.js · Bootstrap · SQLite · HTML5 · Cascading Style Sheets (CSS) · Python · JavaScript · React.js · Flask`,
  },
  {
    year: "2021 - 2023",
    position: " Social Media Manager / Maintenance Director",
    compnayName: "GIC Logistics",
    details: `▪ Oversee the company’s interactions with the public by implementing social media platforms content strategies by analyzing engagement data, creating industry-specific content, ensuring brand consistency, identifying trends in customer interactions, and planning digital campaigns to build an online community in order to drive brand awareness and customer engagement.
    ▪ Overhauled the Maintenance Program to maximize and optimize available resources and ensure industry-standard safety practices.
    ▪ Coordinate, schedule, and audit vehicle maintenance repairs including preventive, mechanical, and electrical repairs to tractors, trucks, and trailers, prioritize and assign work to meet customers’ needs, ensure quality, compliance, and safety, and control the costs for repair, labor, and inventory.
`,
  },
  {
    year: "2017 - present",
    position: "Content creator",
    compnayName: "Maramoo Productions",
    details: `Produce, design, film, record, edit, and host a variety of online shows and other content including 
    ad campaigns, podcasts, audio/video promos, interviews, short documentaries, reviews, ebooks, professional live streams, logos, and graphics.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
