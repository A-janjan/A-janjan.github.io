import React, {useEffect, useRef, useState} from "react";
import MatrixText from "../matrixText/MatrixText";
import "./SectionHeading.scss";

/**
 * Decode the section titles when they scroll into view (once per heading).
 * Set to false if you only want the Matrix text effect on the hero.
 */
const DECODE_ON_SCROLL = true;

/**
 * Consistent, terminal-flavoured section header used across the page.
 *
 *   // 04 / experience
 *   Where I've worked
 *   One short supporting line.
 *
 * The title decodes ("digital rain" resolve) once, the first time the heading
 * scrolls into view — the same effect the hero uses on page load.
 */
export default function SectionHeading({index, kicker, title, lead, accent}) {
  const ref = useRef(null);
  const [decoded, setDecoded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    if (!DECODE_ON_SCROLL) {
      return undefined;
    }

    // Decode immediately if it is already on screen (e.g. small laptops).
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95) {
      setDecoded(true);
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setDecoded(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setDecoded(true);
            observer.disconnect();
          }
        });
      },
      {rootMargin: "0px 0px -12% 0px", threshold: 0.15}
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`section-head${decoded ? " is-decoded" : ""}`} ref={ref}>
      <p className="section-kicker">
        <span className="slash">{"//"}</span>
        {index && <span className="section-index">{index}</span>}
        <span>{kicker}</span>
      </p>
      <h2 className="section-title">
        {!DECODE_ON_SCROLL ? (
          <>
            {title}
            {accent ? <span className="accent">{accent}</span> : null}
          </>
        ) : decoded ? (
          <>
            <MatrixText
              text={title}
              delay={180}
              resolveMs={30}
              glyphMs={40}
            />
            {accent ? (
              <MatrixText
                className="accent"
                text={accent}
                delay={180 + title.length * 30 + 90}
                resolveMs={30}
                glyphMs={40}
              />
            ) : null}
          </>
        ) : (
          // Reserve the final layout so the decode never shifts the page.
          <span className="section-title__ghost" aria-hidden="true">
            {title}
            {accent}
          </span>
        )}
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}
