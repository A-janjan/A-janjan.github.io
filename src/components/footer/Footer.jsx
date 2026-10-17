import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import {greeting, socialMediaLinks, isHireable} from "../../portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const nav = [
    {href: "#skills", label: "skills"},
    {href: "#experience", label: "experience"},
    {href: "#opensource", label: "projects"},
    {href: "#blogs", label: "writing"},
    {href: "#contact", label: "contact"}
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#greeting" className="footer__logo">
            <span aria-hidden="true">~/</span>amjanjan
            <span className="footer__cursor" aria-hidden="true" />
          </a>
          <p className="footer__tagline">
            AI engineer — agentic systems, quantitative finance and production
            backends.
          </p>
          <SocialMedia />
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-title">index</p>
          <ul>
            {nav.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__meta">
          <p className="footer__nav-title">status</p>
          <p className="footer__status">
            <span className="footer__status-dot" aria-hidden="true" />
            {isHireable ? "open to opportunities" : "not looking right now"}
          </p>
          <p className="footer__fine">
            © {year} {greeting.firstName} {greeting.lastName}
          </p>
          <p className="footer__fine">
            built with react ·{" "}
            <a
              href={socialMediaLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </p>
          <a className="footer__top" href="#greeting">
            back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>

      <div className="footer__base">
        <p>
          <span aria-hidden="true">&gt;</span> no cookies, no trackers beyond
          basic analytics.
        </p>
        <p className="footer__base-end" aria-hidden="true">
          [exit 0]
        </p>
      </div>
    </footer>
  );
}
