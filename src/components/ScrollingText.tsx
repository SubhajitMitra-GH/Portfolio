"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const ScrollingText = () => {
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scrollingText = gsap.utils.toArray<HTMLHeadingElement>('.rail h4');
    
    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
      paddingRight: 30,
    });

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) factor *= -1;

        gsap.timeline({ defaults: { ease: "none" } })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      }
    });
  }, []);

  return (
    <div className="scrolling-text">
      <div className="rail" ref={railRef}>
        <h4>Programmer</h4>
        <h4>Engineer</h4>
        <h4>Designer</h4>
        <h4>Minimalist</h4>
      </div>
    </div>
  );
};

export default ScrollingText;

// Include horizontalLoop function here (same as your existing one)
function horizontalLoop(items: HTMLElement[], config: any) {
  // Paste the exact function body here from your current code
  items = gsap.utils.toArray(items);
  const tl = gsap.timeline({ repeat: config.repeat, paused: config.paused });
  const paddingRight = config.paddingRight || 0;
  const totalWidth = items.reduce((acc, el) => acc + el.offsetWidth + paddingRight, 0);

  let currentX = 0;

  items.forEach((el, i) => {
    const duration = (el.offsetWidth + paddingRight) / totalWidth * (config.duration || 20);
    tl.to(el, {
      x: `-=${totalWidth}`,
      duration: duration,
      ease: "none",
    }, 0); // Start all at the same time

    // Reset position when it goes out of view
    gsap.set(el, {
      x: currentX,
    });

    currentX += el.offsetWidth + paddingRight;
  });

  return tl;
}
