import React from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <section className="main skills-section" id="skills">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="01"
          kicker="Capabilities"
          title={skillsSection.title}
          lead={skillsSection.subTitle}
        />
      </Fade>

      <div className="skills-grid">
        <Fade left duration={800} distance="16px">
          <ul className="skills-list">
            {skillsSection.skills.map((skill, i) => (
              <li key={i}>
                <span className="skills-list__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="skills-list__text">{skill}</span>
              </li>
            ))}
          </ul>
        </Fade>

        <Fade right duration={800} distance="16px">
          <aside className="skills-panel mx-panel">
            <div className="skills-panel__head">
              <span className="skills-panel__title">stack.manifest</span>
              <span className="skills-panel__status">
                <i aria-hidden="true" /> loaded
              </span>
            </div>
            <SoftwareSkill />
            <div className="skills-panel__foot">
              <span>python-first</span>
              <span>·</span>
              <span>research &amp; production</span>
            </div>
          </aside>
        </Fade>
      </div>
    </section>
  );
}
