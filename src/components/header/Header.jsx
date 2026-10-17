import React from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  achievementSection
} from "../../portfolio";

function Header() {
  const links = [
    skillsSection.display && {href: "#skills", label: "skills"},
    workExperiences.display && {href: "#experience", label: "experience"},
    openSource.display && {href: "#opensource", label: "projects"},
    achievementSection.display && {href: "#achievements", label: "awards"},
    blogSection.display && {href: "#blogs", label: "writing"},
    {href: "#contact", label: "contact"}
  ].filter(Boolean);

  return (
    <Headroom>
      <header className="header">
        <a href="#greeting" className="logo" aria-label="Back to top">
          <span className="logo__prompt" aria-hidden="true">
            ~/
          </span>
          <span className="logo__name">amjanjan</span>
          <span className="logo__cursor" aria-hidden="true" />
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="menu-icon__label">menu</span>
          <span className="navicon" role="presentation" />
        </label>

        <nav className="menu" aria-label="Main navigation">
          <ul>
            {links.map(link => (
              <li key={link.label}>
                <a href={link.href}>
                  <span className="menu__slash" aria-hidden="true">
                    ./
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
            {greeting.resumeLink && (
              <li className="menu__cta">
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  résumé
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
export default Header;
