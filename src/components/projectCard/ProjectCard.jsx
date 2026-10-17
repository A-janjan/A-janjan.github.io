import React from "react";
import {Fade} from "react-reveal";
import "./ProjectCard.scss";

const LANGUAGE_COLORS = {
  Python: "#4ade80",
  JavaScript: "#e5d76a",
  TypeScript: "#6aa9e5",
  Java: "#e08a5a",
  HTML: "#e0725a",
  "Jupyter Notebook": "#e0955a",
  C: "#8a9aa5",
  "C++": "#c07ae0"
};

export default function ProjectCard({project, index = 0, stats}) {
  const dot = LANGUAGE_COLORS[project.language] || "#4ade80";

  return (
    <Fade bottom duration={650} distance="14px">
      <a
        className="project-card mx-panel"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-card__top">
          <span className="project-card__idx">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="project-card__name">
            <i className="fab fa-github" aria-hidden="true" />
            {project.name}
          </span>
          <span className="project-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__foot">
          <span className="project-card__lang">
            <i style={{background: dot}} aria-hidden="true" />
            {project.language || "Code"}
          </span>
          {stats ? (
            <span className="project-card__stats">
              <span>
                <i className="fas fa-star" aria-hidden="true" />
                {stats.stargazers?.totalCount ?? 0}
              </span>
              <span>
                <i className="fas fa-code-branch" aria-hidden="true" />
                {stats.forkCount ?? 0}
              </span>
            </span>
          ) : (
            <span className="project-card__source">source</span>
          )}
        </div>
      </a>
    </Fade>
  );
}
