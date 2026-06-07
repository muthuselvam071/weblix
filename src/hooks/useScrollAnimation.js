"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom hook for scroll-based animations using GSAP and ScrollTrigger
 * @param {Object} options - Animation configuration options
 * @returns {Object} - Refs and controls for animations
 */
export const useScrollAnimation = (options = {}) => {
  const {
    trigger = null,
    start = "top 85%",
    end = "bottom 20%",
    scrub = false,
    markers = false,
    once = true,
    animation = "fade-up",
    duration = 0.8,
    delay = 0,
    stagger = 0,
    ease = "power2.out",
    from = {},
    to = {},
  } = options;

  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Predefined animation presets
  const getAnimationConfig = useCallback(() => {
    const presets = {
      "fade-up": {
        from: { opacity: 0, y: 50, ...from },
        to: { opacity: 1, y: 0, ...to },
      },
      "fade-down": {
        from: { opacity: 0, y: -50, ...from },
        to: { opacity: 1, y: 0, ...to },
      },
      "fade-left": {
        from: { opacity: 0, x: -50, ...from },
        to: { opacity: 1, x: 0, ...to },
      },
      "fade-right": {
        from: { opacity: 0, x: 50, ...from },
        to: { opacity: 1, x: 0, ...to },
      },
      "scale-up": {
        from: { opacity: 0, scale: 0.8, ...from },
        to: { opacity: 1, scale: 1, ...to },
      },
      "scale-down": {
        from: { opacity: 0, scale: 1.2, ...from },
        to: { opacity: 1, scale: 1, ...to },
      },
      "blur-up": {
        from: { opacity: 0, filter: "blur(10px)", ...from },
        to: { opacity: 1, filter: "blur(0px)", ...to },
      },
      "rotate-in": {
        from: { opacity: 0, rotationX: -90, transformOrigin: "center", ...from },
        to: { opacity: 1, rotationX: 0, ...to },
      },
      "slide-in-left": {
        from: { opacity: 0, x: -100, ...from },
        to: { opacity: 1, x: 0, ...to },
      },
      "slide-in-right": {
        from: { opacity: 0, x: 100, ...from },
        to: { opacity: 1, x: 0, ...to },
      },
      "zoom-in": {
        from: { opacity: 0, scale: 0.5, ...from },
        to: { opacity: 1, scale: 1, ...to },
      },
      "flip-in": {
        from: { opacity: 0, rotationY: 90, ...from },
        to: { opacity: 1, rotationY: 0, ...to },
      },
      "none": {
        from: { opacity: 1, ...from },
        to: { opacity: 1, ...to },
      },
    };

    return presets[animation] || presets["fade-up"];
  }, [animation, from, to]);

  // Create animation
  const createAnimation = useCallback(() => {
    if (!elementRef.current) return null;

    const config = getAnimationConfig();
    const triggerElement = trigger ? document.querySelector(trigger) : elementRef.current;

    // Set initial styles
    gsap.set(elementRef.current, config.from);

    // Create ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: start,
        end: end,
        scrub: scrub,
        markers: markers,
        once: once,
        onEnter: () => setIsVisible(true),
        onLeave: () => !once && setIsVisible(false),
        onEnterBack: () => !once && setIsVisible(true),
        onLeaveBack: () => !once && setIsVisible(false),
      },
    });

    if (stagger > 0) {
      const children = elementRef.current.children;
      tl.fromTo(
        children,
        config.from,
        {
          ...config.to,
          duration: duration,
          delay: delay,
          ease: ease,
          stagger: stagger,
        },
        0
      );
    } else {
      tl.fromTo(
        elementRef.current,
        config.from,
        {
          ...config.to,
          duration: duration,
          delay: delay,
          ease: ease,
        },
        0
      );
    }

    return tl;
  }, [trigger, start, end, scrub, markers, once, stagger, duration, delay, ease, getAnimationConfig]);

  // Initialize animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    animationRef.current = createAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === elementRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [createAnimation]);

  // Refresh ScrollTrigger on window resize
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { elementRef, isVisible };
};

/**
 * Hook for parallax scroll effects
 * @param {number} speed - Parallax speed (1 = normal, 0.5 = slower, 2 = faster)
 * @param {string} direction - 'vertical' or 'horizontal'
 * @returns {Object} - Ref and transform value
 */
export const useParallax = (speed = 0.5, direction = "vertical") => {
  const ref = useRef(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const offset = rect.top + scrolled;
      const distance = scrolled - offset;
      
      if (direction === "vertical") {
        setTransform(distance * speed);
      } else {
        setTransform(distance * speed);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, transform };
};

/**
 * Hook for counting animation on scroll
 * @param {number} targetValue - Target number to count to
 * @param {number} duration - Animation duration in seconds
 * @returns {Object} - Current count value and ref
 */
export const useCountUp = (targetValue, duration = 2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = targetValue / (duration * 60);
            const timer = setInterval(() => {
              start += increment;
              if (start >= targetValue) {
                setCount(targetValue);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [targetValue, duration, hasAnimated]);

  return { count, ref };
};

/**
 * Hook for scroll-triggered text reveal animation
 * @returns {Object} - Refs and controls for text animation
 */
export const useTextReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = ref.current.querySelectorAll(".reveal-letter");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      letters,
      { opacity: 0, y: 30, rotationX: -90 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1)",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return { ref };
};

/**
 * Hook for scroll-triggered image reveal with clip-path
 * @returns {Object} - Ref and animation controls
 */
export const useImageReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return { ref };
};

/**
 * Hook for sticky scroll animations
 * @param {Object} options - Sticky configuration
 * @returns {Object} - Ref and sticky state
 */
export const useStickyScroll = (options = {}) => {
  const {
    start = 0,
    end = 500,
    pin = true,
    pinSpacing = true,
  } = options;

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: `top ${start}px`,
      end: `bottom ${end}px`,
      pin: pin,
      pinSpacing: pinSpacing,
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [start, end, pin, pinSpacing]);

  return { ref };
};

/**
 * Hook for sequential section animations
 * @param {Array} sections - Array of section selectors
 * @returns {Object} - Animation timeline
 */
export const useSequentialAnimation = (sections) => {
  const masterTimeline = useRef(null);

  useEffect(() => {
    masterTimeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    sections.forEach((section, index) => {
      const element = document.querySelector(section);
      if (element) {
        masterTimeline.current.fromTo(
          element,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1 },
          index * 0.3
        );
      }
    });

    return () => {
      if (masterTimeline.current) {
        masterTimeline.current.kill();
      }
    };
  }, [sections]);

  return { masterTimeline };
};

/**
 * Hook for mouse-follow glow effect
 * @returns {Object} - Ref and position state
 */
export const useMouseGlow = () => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setPosition({ x, y });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return { ref, position };
};

// Export all hooks as default object
const useScrollAnimation = {
  useScrollAnimation,
  useParallax,
  useCountUp,
  useTextReveal,
  useImageReveal,
  useStickyScroll,
  useSequentialAnimation,
  useMouseGlow,
};

export default useScrollAnimation;