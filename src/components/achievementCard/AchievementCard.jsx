import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, index = 0}) {
  function openUrlInNewTab(url, name) {
    if (!url || url === "#") {
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const footer = cardInfo.footer || [];

  return (
    <article className="award-card mx-panel">
      <div className="award-card__media">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Certificate"}
          loading="lazy"
        />
      </div>

      <div className="award-card__body">
        <div className="award-card__meta">
          <span className="award-card__date">{cardInfo.description}</span>
          <span className="award-card__id">
            CERT_{String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="award-card__title">{cardInfo.title}</h3>
        {footer.length > 0 && (
          <div className="award-card__tags">
            {footer.map((tag, i) => {
              const isLink = tag.url && tag.url !== "#";
              return (
                <span
                  key={i}
                  className={`award-card__tag${isLink ? " is-link" : ""}`}
                  onClick={() => isLink && openUrlInNewTab(tag.url, tag.name)}
                  role={isLink ? "link" : undefined}
                  tabIndex={isLink ? 0 : undefined}
                  onKeyDown={e => {
                    if (isLink && (e.key === "Enter" || e.key === " ")) {
                      openUrlInNewTab(tag.url, tag.name);
                    }
                  }}
                >
                  {tag.name}
                </span>
              );
            })}
            <span className="award-card__verified">verified</span>
          </div>
        )}
      </div>
    </article>
  );
}
