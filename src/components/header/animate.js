export const menuSlide = {
  initial: {
    x: '100%',
  },

  enter: {
    x: '-20vw',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    x: '100%',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const menuSlideList = {
  enter: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  exit: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
      staggerDirection: 1,
    },
  },
};

export const menuSlideItem = {
  initial: {
    x: 100,
    opacity: 0,
  },

  enter: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000 },
      ease: [0.76, 0, 0.24, 1],
    },
  },

  exit: {
    x: 100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const curvedSlide = {
  initial: {
    width: '20vw',
  },

  enter: {
    width: '0vw',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },

  exit: {
    width: '20vw',
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};
