export const pageTransition = {
  initial: {
    top: '0',
  },

  enter: {
    top: '-100vh',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.6 },
    transitionEnd: { top: '100vh' },
  },

  exit: {
    top: '0',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export const curvedPageTransition = {
  initial: {
    height: '10vh',
  },

  enter: {
    height: '0vh',
    transition: { duration: 0.9, delay: 0.6, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    height: '10vh',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },

  enter: {
    scale: 1,

    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    scale: 0,

    transition: { duration: 0.3, ease: [0.87, 0, 0.13, 1] },
  },
};

export const slideUp = {
  initial: {
    y: '100%',
  },

  enter: (time = 1.3) => ({
    y: '0%',
    transition: { duration: time, ease: [0.65, 0, 0.35, 1] },
  }),
};

export const opacity = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 1,
    transition: { duration: 1, delay: 0.3, ease: [0.65, 0, 0.35, 1] },
  },
};
