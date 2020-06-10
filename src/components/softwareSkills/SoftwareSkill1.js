import React from "react";
import "./SoftwareSkill.css";
import { acadSection } from "../../portfolio";

export default function SoftwareSkill1() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {acadSection.softwareSkills1.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
