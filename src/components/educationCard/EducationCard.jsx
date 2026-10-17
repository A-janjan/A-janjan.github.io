import React from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";

export default function EducationCard({school, index = 0}) {
  const bullets = school.descBullets;

  if (!school.logo) {
    console.error(`Image of ${school.schoolName} is missing in education section`);
  }

  return (
    <Fade bottom duration={700} distance="14px">
      <article className="edu-item">
        <div className="edu-item__rail" aria-hidden="true">
          <span className="edu-item__dot" />
        </div>

        <div className="edu-card mx-panel">
          <div className="edu-card__head">
            {school.logo && (
              <div className="edu-card__logo">
                <img src={school.logo} alt={school.schoolName} loading="lazy" />
              </div>
            )}
            <div className="edu-card__ident">
              <h3 className="edu-card__school">{school.schoolName}</h3>
              <p className="edu-card__degree">{school.subHeader}</p>
            </div>
            <span className="edu-card__date">{school.duration}</span>
          </div>

          {school.desc && <p className="edu-card__desc">{school.desc}</p>}

          {bullets && bullets.length > 0 && (
            <ul className="mx-bullets edu-card__bullets">
              {bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          <span className="edu-card__index" aria-hidden="true">
            EDU_{String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </article>
    </Fade>
  );
}
