import React from "react";
import {Fade} from "react-reveal";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, index = 0}) {
  return (
    <Fade bottom duration={700} distance="14px">
      <article className="xp-card mx-panel">
        <div className="xp-card__head">
          <div className="xp-card__logo">
            <img
              src={cardInfo.companylogo}
              alt={cardInfo.company}
              loading="lazy"
            />
          </div>
          <div className="xp-card__ident">
            <h3 className="xp-card__role">{cardInfo.role}</h3>
            <p className="xp-card__company">
              <span>{cardInfo.company}</span>
              <span className="xp-card__date">{cardInfo.date}</span>
            </p>
          </div>
        </div>

        <p className="xp-card__desc">{cardInfo.desc}</p>

        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="mx-bullets xp-card__bullets">
            {cardInfo.descBullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        <span className="xp-card__index" aria-hidden="true">
          EXP_{String(index + 1).padStart(2, "0")}
        </span>
      </article>
    </Fade>
  );
}
