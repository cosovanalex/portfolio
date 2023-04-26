import React from "react";

const experienceContent = [
  {
    year: "April 2022 - December 2022",
    position: "Software Engineer",
    compnayName: "Coding Temple",
    details: `• Completed a rigorous curriculum covering the most in-demand skills in the software engineering industry\n• Acquired a strong foundation in web development, core programming concepts, and database management\n• Proficient in both back-end and front-end development, with a solid understanding of frameworks and APIs`,
  },
  {
    year: "2021 - 2023",
    position: " Project Manager / Social Media Manager",
    compnayName: "GIC Logistics",
    details: `• Managed a team of 25-30 people, streamlining processes and enhancing communication\n• Saved the company $250,000 in repair costs in one year by improving compliance and safety\n• Digitized and automated the Maintenance Program to increase efficiency and productivity\nGrew the company's LinkedIn following by 300% by leading social media strategy`,
  },
  {
    year: "2017 - present",
    position: "Multimedia and Digital Marketing",
    compnayName: "Maramoo Productions",
    details: `• Designed, wrote, hosted, edited, distributed, and promoted a groundbreaking online show in collaboration with LegalizeIt, contributing to exponential company growth from one location to 10 franchise locations within one year\n• Built a personal brand with a vast following, garnering millions of views across multiple social media platforms and generating thousands of dollars through the sales of branded merchandise\n• Conceptualized and executed innovative web development projects, incorporating the latest design trends and technologies`,
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
          <p className="open-sans-font" style={{ whiteSpace: "pre-wrap" }}>{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
