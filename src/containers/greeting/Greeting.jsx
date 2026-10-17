import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import MatrixRain from "../../components/matrixRain/MatrixRain";
import MatrixText from "../../components/matrixText/MatrixText";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Terminal from "../../components/terminal/Terminal";

import {greeting} from "../../portfolio";

export default function Greeting() {
  // "Booting" briefly boosts the rain + shows a scan sweep, then settles.
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setBooting(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!greeting.displayGreeting) {
    return null;
  }

  const terminalLines = [
    {
      command: "whoami",
      output: [`${greeting.firstName} ${greeting.lastName}`.toLowerCase()]
    },
    {
      command: "cat focus.txt",
      output: greeting.focus
    },
    {
      command: "ls ~/work",
      output: ["research/   quantitative-finance/   backend/"]
    },
    {
      command: "echo $STATUS",
      output: [`> ${(greeting.status || "").toLowerCase()}`]
    }
  ];

  return (
    <section className={`hero${booting ? " hero--booting" : ""}`} id="greeting">
      <MatrixRain />
      <span className="hero__sweep" aria-hidden="true" />

      <div className="hero__inner">
        <Fade bottom duration={380} distance="8px">
          <div className="hero__copy">
            <p className="hero__status hero-in" style={{"--in-delay": "0ms"}}>
              <span className="hero__status-dot" aria-hidden="true" />
              <MatrixText text={greeting.status} delay={40} resolveMs={22} glyphMs={44} />
            </p>

            <h1 className="hero__title">
              <MatrixText
                className="hero__name"
                text={greeting.firstName}
                delay={140}
                resolveMs={58}
                glyphMs={52}
              />
              <MatrixText
                className="hero__name hero__name--accent"
                text={greeting.lastName}
                delay={140 + greeting.firstName.length * 58 + 90}
                resolveMs={58}
                glyphMs={52}
              />
            </h1>

            <p className="hero__role hero-in" style={{"--in-delay": "520ms"}}>
              <span className="hero__role-prompt">&gt;_</span>
              <MatrixText
                className="hero__role-text"
                text={greeting.title}
                delay={470}
                resolveMs={40}
                glyphMs={48}
                caret={true}
              />
            </p>

            <p className="hero__summary hero-in" style={{"--in-delay": "700ms"}}>
              {greeting.subTitle}
            </p>

            <ul
              className="hero__focus hero-in"
              style={{"--in-delay": "800ms"}}
              aria-label="Areas of focus"
            >
              {greeting.focus.map(item => (
                <li key={item} className="mx-chip">
                  {item}
                </li>
              ))}
            </ul>

            <div
              className="hero__actions hero-in"
              style={{"--in-delay": "900ms"}}
            >
              {greeting.resumeLink && (
                <Button
                  text="View résumé"
                  href={greeting.resumeLink}
                  newTab={true}
                />
              )}
              <Button text="Get in touch" href="#contact" variant="ghost" />
              <SocialMedia />
            </div>

            <ul
              className="hero__meta hero-in"
              style={{"--in-delay": "1000ms"}}
            >
              {greeting.credentials.map(item => (
                <li key={item}>
                  <span className="hero__meta-mark" aria-hidden="true">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        <Fade bottom duration={620} delay={420} distance="16px">
          <div className="hero__terminal">
            <Terminal
              title="amir@janjan"
              path="~/portfolio"
              lines={terminalLines}
            />
            <p className="hero__terminal-note">
              <span aria-hidden="true">{"//"}</span> agents, markets &amp; the
              occasional side quest
            </p>
          </div>
        </Fade>
      </div>

      <a className="hero__scroll" href="#skills" aria-label="Scroll to skills">
        <span aria-hidden="true">↓</span> scroll
      </a>
    </section>
  );
}
