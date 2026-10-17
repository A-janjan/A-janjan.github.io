import React, {useEffect, useRef} from "react";
import "./MatrixRain.scss";

const GLYPHS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
  "0123456789ABCDEF<>[]{}/\\|=+*-#$%&@";

const MONO =
  '"JetBrains Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace';

/**
 * A quiet "digital rain" canvas.
 *
 * Deliberately dialled down for a professional page: small glyphs, low
 * opacity, ~16 fps, and it stops rendering when scrolled out of view.
 * Fully disabled for users who prefer reduced motion.
 */
export default function MatrixRain({className = ""}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return undefined;
    }
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let fontSize = 14;
    let columns = 0;
    let drops = [];
    let raf = null;
    let last = 0;
    let running = true;

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px ${MONO}`;
      for (let i = 0; i < columns; i += 2) {
        const x = i * fontSize * 2.1;
        for (let y = 0; y < height; y += fontSize * 4) {
          if (Math.random() > 0.72) {
            ctx.fillStyle = "rgba(74, 222, 128, 0.22)";
            ctx.fillText(
              GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
              x,
              y
            );
          }
        }
      }
    };

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) {
        return;
      }
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 700 ? 11 : 13;
      columns = Math.ceil(width / (fontSize * 2.1));
      drops = Array.from({length: columns}, () => Math.random() * -height * 1.5);
      ctx.clearRect(0, 0, width, height);

      if (reduceMotion) {
        drawStatic();
      }
    };

    const step = timestamp => {
      raf = window.requestAnimationFrame(step);
      if (!running || document.hidden) {
        return;
      }
      if (timestamp - last < 62) {
        return;
      }
      last = timestamp;

      ctx.fillStyle = "rgba(6, 10, 8, 0.16)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px ${MONO}`;

      for (let i = 0; i < columns; i += 1) {
        const x = i * fontSize * 2.1;
        const y = drops[i];
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

        if (Math.random() > 0.995) {
          ctx.fillStyle = "rgba(214, 255, 232, 0.85)";
        } else {
          ctx.fillStyle = "rgba(74, 222, 128, 0.36)";
        }
        ctx.fillText(glyph, x, y);

        if (y > height + 40 && Math.random() > 0.96) {
          drops[i] = -Math.random() * 120;
        } else {
          drops[i] += fontSize * (0.75 + Math.random() * 0.7);
        }
      }
    };

    setup();

    if (!reduceMotion) {
      raf = window.requestAnimationFrame(step);
    }

    let resizeTimer = null;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(setup, 180);
    };
    window.addEventListener("resize", onResize);

    let observer = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (reduceMotion) {
            return;
          }
          running = entry.isIntersecting;
          if (running) {
            last = 0;
          }
        });
      });
      observer.observe(canvas);
    }

    const onVisibility = () => {
      last = 0;
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      if (observer) {
        observer.disconnect();
      }
      window.clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`matrix-rain ${className}`}
      aria-hidden="true"
    />
  );
}
