import React from "react";

const skillsContent = [
  { skillClass: "p100", skillPercent: "CSS" },
  { skillClass: "p100", skillPercent: "Flask" },
  { skillClass: "p100", skillPercent: "HTML"  },
  { skillClass: "p100", skillPercent: "JS" },
  { skillClass: "p100", skillPercent: "Python" },
  { skillClass: "p100", skillPercent: "React" },
  { skillClass: "p100", skillPercent: "SQL" },
  { skillClass: "p100", skillPercent: "TS" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;



