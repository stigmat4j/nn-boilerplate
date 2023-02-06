import { css, Theme } from "@emotion/react";
import { ColorNames } from "@/ui/theme/colors";

const headlineStyles = {
  headline:
    (color: ColorNames, level: 1 | 2 | 3 | 4 | 5 | 6, url?: string) =>
    (theme: Theme) =>
      css`
        position: relative;
        display: inline-block;
        color: ${theme.colors[color]()};
        font: 600 ${fontSizes[level]} ${theme.font};
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        @media (max-width: 768px) {
          font: 600 ${fontSizesMobile[level]} ${theme.font};
        }

        ${url &&
        css`
          &:hover {
            color: ${color !== "violet"
              ? theme.colors.violet()
              : theme.colors.black()};
          }
        `}
      `,
};

const fontSizes = {
  1: "46px/48px",
  2: "30px/40px",
  3: "24px/32px",
  4: "20px/24px",
  5: "16px/24px",
  6: "11px/24px",
};

const fontSizesMobile = {
  1: "22px/24px",
  2: "30px/40px",
  3: "22px/24px",
  4: "20px/24px",
  5: "16px/24px",
  6: "11px/24px",
};

export default headlineStyles;
