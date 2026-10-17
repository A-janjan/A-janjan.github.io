import React from "react";
import "./Education.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) {
    return null;
  }
  return (
    <section className="main education-section" id="education">
      <SectionHeading
        index="03"
        kicker="Education"
        title="Academic Background"
        lead="Formal training in artificial intelligence, control engineering and mathematics."
      />
      <div className="education-timeline">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} index={index} />
        ))}
      </div>
    </section>
  );
}
