import React from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import {contactInfo, isHireable} from "../../portfolio";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  const hireable = isHireable ? "yes" : "no";

  return (
    <section className="main profile-section" id="contact">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="08"
          kicker="Contact"
          title="Reach Out"
          lead={contactInfo.subtitle}
        />
      </Fade>

      <div className="profile-panel mx-panel">
        <div className="profile-panel__avatar">
          <img src={prof.avatarUrl} alt={prof.name} className="profile-image" />
        </div>

        <div className="profile-panel__body">
          <div className="profile-panel__ident">
            <h3 className="profile-panel__name">{prof.name}</h3>
            {prof.location && (
              <span className="profile-panel__location">
                <i className="fas fa-map-marker-alt" aria-hidden="true" />
                {prof.location}
              </span>
            )}
          </div>

          {prof.bio && <p className="profile-panel__bio">“{prof.bio}”</p>}

          <p className="profile-panel__status">
            <span className="profile-panel__status-dot" aria-hidden="true" />
            open for opportunities: {hireable}
          </p>

          <a
            className="profile-panel__email"
            href={`mailto:${contactInfo.email_address}`}
          >
            {contactInfo.email_address}
          </a>

          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
