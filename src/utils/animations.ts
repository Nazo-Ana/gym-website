import gsap from 'gsap';

/**
 * Smooth scroll with GSAP
 */
export const smoothScroll = (target: string | number, duration = 1) => {
  if (typeof target === 'string') {
    const element = document.querySelector(target) as HTMLElement;
    if (!element) return;

    gsap.to(window, {
      duration,
      scrollTo: {
        y: element,
        autoKill: true,
      },
      ease: 'power3.inOut',
    });
  } else {
    gsap.to(window, {
      duration,
      scrollTo: {
        y: target,
        autoKill: true,
      },
      ease: 'power3.inOut',
    });
  }
};

/**
 * Create a staggered animation
 */
export const staggerAnimation = (
  elements: NodeListOf<Element> | Element[],
  animation: any,
  stagger = 0.1
) => {
  if (elements instanceof NodeList) {
    const elementArray = Array.from(elements);
    gsap.to(elementArray, {
      ...animation,
      stagger,
    });
  } else {
    gsap.to(elements, {
      ...animation,
      stagger,
    });
  }
};

/**
 * Create a floating animation
 */
export const floatingAnimation = (element: Element | string, intensity = 1) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;

  gsap.to(target, {
    y: -20 * intensity,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Create a glow effect
 */
export const glowEffect = (element: Element | string) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;

  gsap.to(target, {
    boxShadow: '0 0 40px rgba(255, 20, 147, 0.8)',
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Create a pulse animation
 */
export const pulseAnimation = (element: Element | string, scale = 1.1) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;

  gsap.to(target, {
    scale,
    duration: 0.75,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Reveal animation on scroll
 */
export const revealOnScroll = (
  element: Element | string,
  options?: any
) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element;
  if (!target) return;

  gsap.from(target, {
    scrollTrigger: {
      trigger: target,
      start: 'top 80%',
      end: 'top 20%',
      scrub: 1,
      ...options?.trigger,
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ...options?.animation,
  });
};
