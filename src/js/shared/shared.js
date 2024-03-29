export const VALUES_GRID = {
  xsMin: 0,
  xsMax: 767,
  smMin: 768,
  smMax: 1023,
  mdMin: 1024,
  mdMax: 1199,
  lgMin: 1200
};

export const MEDIA_QUERIES = {
  xsMin: `screen and (min-width: ${VALUES_GRID.xsMin}px)`,
  xs: `screen and (max-width: ${VALUES_GRID.xsMax}px)`,
  xsMax: `screen and (max-width: ${VALUES_GRID.xsMax}px)`,
  smMin: `screen and (min-width: ${VALUES_GRID.smMin}px)`,
  sm: `screen and (min-width: ${VALUES_GRID.smMin}px) and (max-width: ${VALUES_GRID.smMax}px)`,
  smMax: `screen and (max-width: ${VALUES_GRID.smMax}px)`,
  mdMin: `screen and (min-width: ${VALUES_GRID.mdMin}px)`,
  md: `screen and (min-width: ${VALUES_GRID.mdMin}px) and (max-width: ${VALUES_GRID.mdMax}px)`,
  mdMax: `screen and (max-width: ${VALUES_GRID.mdMax}px)`,
  lgMin: `screen and (min-width: ${VALUES_GRID.lgMin}px)`,
  lg: `screen and (min-width: ${VALUES_GRID.lgMin}px)`
};

export const SHARED_CLASSES = {
  active: 'is-active',
  expanded: 'is-expanded',
  animate: 'is-animated',
  visible: 'is-visible',
  collapsed: 'is-collapsed',
  outsideViewport: 'is-outside-viewport'
};
