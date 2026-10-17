import React, {useEffect, useState} from "react";
import "./Top.scss";

export default function Top() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({top: 0, behavior: "smooth"});

  return (
    <button
      type="button"
      onClick={scrollToTop}
      id="topButton"
      className={visible ? "is-visible" : ""}
      title="Back to top"
      aria-label="Back to top"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
