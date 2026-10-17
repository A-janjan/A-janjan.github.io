import React from "react";
import "./WorkExperience.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }
  return (
    <section className="main experience-section" id="experience">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="04"
          kicker="Experience"
          title="Where I've Worked"
          lead="Research, engineering and freelance work across AI, robotics and backend systems."
        />
      </Fade>

      <div className="experience-cards-div">
        {workExperiences.experience.map((card, i) => (
          <ExperienceCard
            key={i}
            index={i}
            cardInfo={{
              company: card.company,
              desc: card.desc,
              date: card.date,
              companylogo: card.companylogo,
              role: card.role,
              descBullets: card.descBullets
            }}
          />
        ))}
      </div>
    </section>
  );
}
