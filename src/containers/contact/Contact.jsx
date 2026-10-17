import React, {useEffect, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Button from "../../components/button/Button";
import {contactInfo, greeting} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  const [avatar, setAvatar] = useState(null);

  // Optional: reuse the avatar that fetch.js writes into /profile.json.
  useEffect(() => {
    let active = true;
    fetch("/profile.json")
      .then(result => (result.ok ? result.json() : Promise.reject(result)))
      .then(response => {
        const url = response?.data?.user?.avatarUrl;
        if (active && url) {
          setAvatar(url);
        }
      })
      .catch(() => {
        /* no profile data — the card simply renders without an avatar */
      });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="main contact-section" id="contact">
      <Fade bottom duration={800} distance="16px">
        <SectionHeading
          index="08"
          kicker="Contact"
          title="Get in Touch"
          lead={contactInfo.subtitle}
        />
      </Fade>

      <div className="contact-div-main">
        <Fade left duration={800} distance="16px">
          <div className="contact-header">
            <div className="contact-id">
              {avatar && (
                <img
                  className="contact-id__avatar"
                  src={avatar}
                  alt={`${greeting.firstName} ${greeting.lastName}`}
                  loading="lazy"
                />
              )}
              <div className="contact-id__text">
                <p className="contact-id__name">
                  {greeting.firstName} {greeting.lastName}
                </p>
                <p className="contact-id__role">{greeting.title}</p>
              </div>
            </div>

            <p className="contact-label">$ mail --to</p>
            <a
              className="contact-detail-email"
              href={`mailto:${contactInfo.email_address}`}
            >
              {contactInfo.email_address}
            </a>

            {contactInfo.number && (
              <a
                className="contact-detail"
                href={`tel:${contactInfo.number}`}
              >
                {contactInfo.number}
              </a>
            )}

            <p className="contact-note">
              Open to research collaborations, AI engineering roles and
              quantitative-finance projects. I usually reply within a couple of
              days.
            </p>

            <div className="contact-actions">
              <Button
                text="Send email"
                href={`mailto:${contactInfo.email_address}`}
              />
              {greeting.resumeLink && (
                <Button
                  text="View résumé"
                  href={greeting.resumeLink}
                  newTab={true}
                  variant="ghost"
                />
              )}
            </div>

            <SocialMedia />
          </div>
        </Fade>

        <Fade right duration={800} distance="16px">
          <div className="contact-image-div">
            <div className="contact-term mx-panel">
              <div className="contact-term__bar">
                <span className="contact-term__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>mail.session</span>
              </div>
              <div className="contact-term__body">
                <p>
                  <span className="contact-term__prompt">$</span> mail -s
                  "hello" <span className="contact-term__arg">me</span>
                </p>
                <p className="contact-term__muted">
                  &gt; subject: let&apos;s build something
                </p>
                <p className="contact-term__muted">
                  &gt; body: agents · markets · backend
                </p>
                <p className="contact-term__ok">[ok] message queued</p>
                <p className="contact-term__muted">
                  &gt; channel: {contactInfo.email_address}
                </p>
                <p className="contact-term__cursor-line">
                  <span className="contact-term__prompt">$</span>
                  <span className="contact-term__caret" aria-hidden="true" />
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
