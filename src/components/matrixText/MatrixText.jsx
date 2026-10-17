import React, {useEffect, useMemo, useRef, useState} from "react";
import "./MatrixText.scss";

/*
 * Glyphs used for the decode effect.
 *
 * Deliberately ASCII-only: JetBrains Mono covers all of them, so every glyph is
 * exactly 1ch wide and the text never jitters or reflows while it resolves.
 */
const GLYPHS = (
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "abcdefghijklmnopqrstuvwxyz" +
  "0123456789" +
  "<>[]{}/\\|=+*-#$%&@_!?:;~^"
).split("");

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * MatrixText — a one-shot "digital rain" text reveal.
 *
 * On mount the string appears as a block of random glyphs that locks into the
 * real characters from left to right. Each character that locks gets a single
 * bright-green flash (a CSS animation on `.mx-char--locked`), so nothing has to
 * stay in a glowing state afterwards.
 *
 * props
 *  text        the final string
 *  as          wrapper tag (span, h1, p …)
 *  delay       ms before the reveal starts
 *  resolveMs   ms per character (higher = slower)
 *  glyphMs     ms between glyph shuffles (higher = chunkier)
 *  className   extra classes on the wrapper
 *  caret       show a blinking block caret after the text once resolved
 */
export default function MatrixText({
  text = "",
  as: Tag = "span",
  className = "",
  delay = 0,
  resolveMs = 46,
  glyphMs = 58,
  caret = false,
  ...rest
}) {
  const chars = useMemo(() => Array.from(text), [text]);
  const [glyphs, setGlyphs] = useState(() =>
    chars.map(char => (char === " " ? " " : randomGlyph()))
  );
  const [locked, setLocked] = useState(0);
  const [done, setDone] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!chars.length) {
      return undefined;
    }

    // Accessibility / low-power: show the final string straight away.
    if (prefersReducedMotion()) {
      setGlyphs(chars);
      setLocked(chars.length);
      setDone(true);
      return undefined;
    }

    let raf = null;
    let start = null;
    let lastPaint = -Infinity;

    const tick = now => {
      if (!mounted.current) {
        return;
      }
      if (start === null) {
        start = now + delay;
      }
      const elapsed = Math.max(0, now - start);
      const resolved = Math.min(
        chars.length,
        Math.floor(elapsed / resolveMs)
      );

      if (now - lastPaint >= glyphMs) {
        lastPaint = now;
        setGlyphs(prev =>
          chars.map((char, i) => {
            if (char === " ") {
              return " ";
            }
            return i < resolved ? char : prev[i] || randomGlyph();
          })
        );
        setLocked(resolved);
      }

      if (resolved >= chars.length) {
        setGlyphs(chars);
        setLocked(chars.length);
        setDone(true);
        return;
      }
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    return () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
    };
  }, [chars, delay, resolveMs, glyphMs]);

  return (
    <Tag
      className={`mx-text${done ? " mx-text--done" : ""}${
        className ? ` ${className}` : ""
      }`}
      {...rest}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {chars.map((char, i) => {
          const revealed = i < locked;
          return (
            <span
              key={i}
              className={`mx-char${
                revealed ? " mx-char--locked" : " mx-char--pending"
              }`}
            >
              {revealed
                ? char
                : glyphs[i] || (char === " " ? " " : "\u00A0")}
            </span>
          );
        })}
      </span>
      {caret && <span className="mx-text__caret" aria-hidden="true" />}
    </Tag>
  );
}
