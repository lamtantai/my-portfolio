export const translate = {
  initial: {
    top: '0',
  },

  enter: {
    top: '-100vh',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 1 },
    transitionEnd: { top: '100vh' },
  },

  exit: {
    top: '0',
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
};

export const curved = {
  initial: {
    height: '10vh',
  },

  enter: {
    height: '0vh',
    transition: { duration: 0.9, delay: 1, ease: [0.76, 0, 0.24, 1] },
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
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.3, ease: [0.87, 0, 0.13, 1] },
  },
};
