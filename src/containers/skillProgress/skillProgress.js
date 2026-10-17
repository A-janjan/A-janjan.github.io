import React from "react";
import "./Progress.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (!techStack.viewSkillBars) {
    return null;
  }

  return (
    <section className="main proficiency-section" id="proficiency">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="02"
          kicker="Proficiency"
          title="Core Stack"
          lead="Where I spend most of my building time — from research prototypes to deployed services."
        />
      </Fade>

      <div className="proficiency-panel mx-panel">
        {techStack.experience.map((exp, i) => (
          <div className="proficiency-row" key={i}>
            <div className="proficiency-row__head">
              <span className="proficiency-row__name">
                <span className="proficiency-row__idx">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {exp.Stack}
              </span>
              <span className="proficiency-row__value">
                {exp.progressPercentage}
              </span>
            </div>
            <div
              className="proficiency-track"
              role="progressbar"
              aria-label={exp.Stack}
              aria-valuenow={parseInt(exp.progressPercentage, 10)}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <span
                className="proficiency-fill"
                style={{width: exp.progressPercentage}}
              />
            </div>
          </div>
        ))}
        <div className="proficiency-foot">
          <span aria-hidden="true">{"//"}</span> self-assessed · updated 2026
        </div>
      </div>
    </section>
  );
}
