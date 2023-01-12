import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "CERTIFICATION in Computer Software Engineering",
    institute: "CODING TEMPLE",
  },
  {
    year: "2019-2021",
    degree: "ASSOCIATE'S DEGREE in Visual Communications",
    institute: "MADISON AREA TECHNICAL COLLEGE",
  },
  {
    year: "2008-2011",
    degree: "BACHELOR'S DEGREE in Business Administration and Management",
    institute: "BABES-BOLYAI University",

  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
