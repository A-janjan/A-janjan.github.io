import React from "react";
import "./SplashScreen.css";
import {greeting} from "../../portfolio";

export default function SplashScreen() {
  const lines = [
    {tag: "[boot]", text: "initializing environment", delay: 40},
    {tag: "[ ok ]", text: "mounting ~/portfolio", delay: 160},
    {tag: "[ ok ]", text: "loading experience module", delay: 280},
    {tag: "[ ok ]", text: "calibrating digital rain", delay: 400}
  ];

  return (
    <div className="splash-container">
      <div className="splash-boot" role="status" aria-live="polite">
        {lines.map(line => (
          <p
            key={line.text}
            className="splash-boot__line"
            style={{animationDelay: `${line.delay}ms`}}
          >
            <span className="splash-boot__tag">{line.tag}</span> {line.text}
          </p>
        ))}
        <p
          className="splash-boot__line splash-boot__line--ready"
          style={{animationDelay: "560ms"}}
        >
          <span className="splash-boot__tag">$</span> whoami
          <span className="splash-boot__caret" aria-hidden="true" />
        </p>
      </div>

      <div className="splash-title-container">
        <span className="splash-bracket">&lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="splash-bracket">/&gt;</span>
      </div>
    </div>
  );
}
