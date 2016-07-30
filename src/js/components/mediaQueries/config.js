export const VALUES_GRID = {
  xsMin: 0,
  xsMax: 767,
  smMin: 768,
  smMax: 1023,
  mdMin: 1024,
  mdMax: 1199,
  lgMin: 1200
};

export const VALUES = {
  outOfIndex: -1
};

export const MEDIA_QUERIES = {
  xs: `screen and (max-width: ${VALUES_GRID.xsMax}px)`,
  xsMin: `screen and (max-width: ${VALUES_GRID.xsMax}px)`,
  xsMax: `screen and (max-width: ${VALUES_GRID.xsMax}px)`,
  sm: `screen and (min-width: ${VALUES_GRID.smMin}px) and (max-width: ${VALUES_GRID.smMax}px)`,
  smMin: `screen and (min-width: ${VALUES_GRID.smMin}px)`,
  smMax: `screen and (max-width: ${VALUES_GRID.smMax}px)`,
  md: `screen and (min-width: ${VALUES_GRID.mdMin}px) and (max-width: ${VALUES_GRID.mdMax}px)`,
  mdMin: `screen and (min-width: ${VALUES_GRID.mdMin}px)`,
  mdMax: `screen and (max-width: ${VALUES_GRID.mdMax}px)`,
  lg: `screen and (min-width: ${VALUES_GRID.lgMin}px)`,
  lgMin: `screen and (min-width: ${VALUES_GRID.lgMin}px)`
};
