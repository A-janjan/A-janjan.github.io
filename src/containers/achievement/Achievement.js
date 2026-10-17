import React from "react";
import "./Achievement.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Achievement() {
  if (!achievementSection.display) {
    return null;
  }
  return (
    <section className="main achievement-section" id="achievements">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="06"
          kicker="Recognition"
          title={achievementSection.title}
          lead={achievementSection.subtitle}
        />
      </Fade>
      <div className="achievement-cards-div">
        {achievementSection.achievementsCards.map((card, i) => (
          <AchievementCard
            key={i}
            index={i}
            cardInfo={{
              title: card.title,
              description: card.subtitle,
              image: card.image,
              imageAlt: card.imageAlt,
              footer: card.footerLink
            }}
          />
        ))}
      </div>
    </section>
  );
}
