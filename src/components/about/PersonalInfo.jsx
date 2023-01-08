import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Alexandru", hasColor: "" },
  { meta: "last name", metaInfo: "Cosovan", hasColor: "" },
  { meta: "Age", metaInfo: "33 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Romanian", hasColor: "" },
  { meta: "Address", metaInfo: "Madison, WI USA", hasColor: "" },
  { meta: "phone", metaInfo: "+6083931392", hasColor: "" },
  { meta: "Email", metaInfo: "cosovan.alexandru@gmail.com", hasColor: "" },
  { meta: "languages", metaInfo: "English, Romanian, Hungarian", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
