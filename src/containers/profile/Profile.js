import React from "react";
import Contact from "../contact/Contact";

/**
 * The contact section is intentionally the single place to reach out.
 *
 * The original template swapped this section for a GitHub profile card when
 * pinned-repo data was available; that produced inconsistent copy and a
 * "Automation Engineer" bio pulled from GitHub. The resume layout keeps one
 * consistent, hand-written contact block instead.
 */
export default function Profile() {
  return <Contact />;
}
