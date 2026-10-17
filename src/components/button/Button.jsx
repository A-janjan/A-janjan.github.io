import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className = "",
  href = "#",
  newTab = false,
  variant = "primary"
}) {
  return (
    <div className={`button-wrapper ${className}`}>
      <a
        className={`main-button main-button--${variant}`}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <span className="main-button__label">{text}</span>
        <span className="main-button__arrow" aria-hidden="true">
          {newTab ? "↗" : "→"}
        </span>
      </a>
    </div>
  );
}
