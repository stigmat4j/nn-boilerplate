export type ColorNames =
  | "white"
  | "light"
  | "divider"
  | "grey"
  | "black"
  | "link"
  | "red"
  | "violet"
  | "green";

export type Colors = Record<ColorNames, (opacity?: number) => string>;

export const colors: Colors = {
  white: (opacity = 1) => `rgba(238,238,238, ${opacity})`,
  light: (opacity = 1) => `rgba(250,250,250, ${opacity})`,
  divider: (opacity = 1) => `rgba(235,235,235, ${opacity})`,
  grey: (opacity = 1) => `rgba(179,179,179, ${opacity})`,
  black: (opacity = 1) => `rgba(33,33,33, ${opacity})`,
  link: (opacity = 1) => `rgba(91,36,201, ${opacity})`,
  red: (opacity = 1) => `rgba(255,82,82, ${opacity})`,
  violet: (opacity = 1) => `rgba(91,36,201, ${opacity})`,
  green: (opacity = 1) => `rgba(75,200,0, ${opacity})`,
};
