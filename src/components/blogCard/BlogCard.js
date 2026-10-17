import React from "react";
import {Fade} from "react-reveal";
import "./BlogCard.scss";

function slugify(text) {
  return String(text || "blog")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function BlogCard({blog, index = 0}) {
  return (
    <Fade bottom duration={650} distance="14px">
      <a
        className="post-card mx-panel"
        href={blog.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="post-card__head">
          <span className="post-card__path">
            ~/writing/{slugify(blog.title)}
          </span>
          <span className="post-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <h3 className="post-card__title">{blog.title}</h3>
        <p className="post-card__desc">{blog.description}</p>
        <div className="post-card__foot">
          <span>read archive</span>
          <span className="post-card__idx">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </a>
    </Fade>
  );
}
