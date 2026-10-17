import React from "react";
import "./Terminal.scss";

/**
 * A small, static terminal window.
 * `lines` is an array of {command, output[]} objects.
 */
export default function Terminal({title = "amir@janjan", path = "~/portfolio", lines = []}) {
  return (
    <div className="term">
      <div className="term__bar">
        <span className="term__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="term__path">
          {title}: {path}
        </span>
        <span className="term__badge">zsh</span>
      </div>
      <div className="term__body">
        {lines.map((line, i) => (
          <div className="term__block" key={i} style={{animationDelay: `${120 + i * 120}ms`}}>
            <p className="term__cmd">
              <span className="term__prompt">$</span> {line.command}
            </p>
            {line.output && line.output.length > 0 && (
              <div className="term__out">
                {line.output.map((row, j) => (
                  <p key={j}>{row}</p>
                ))}
              </div>
            )}
          </div>
        ))}
        <p className="term__cmd term__cmd--last">
          <span className="term__prompt">$</span>
          <span className="term__caret" aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}
