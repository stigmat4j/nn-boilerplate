import { css, Theme } from "@emotion/react";
import { ColorNames } from "@/ui/theme/colors";
import fonts from "@/ui/theme/fonts";

const paragraphStyles = {
  paragraph:
    (
      color: ColorNames,
      level: 1 | 2 | 3 | 4,
      bold: boolean,
      url?: string | null,
      urlHover?: boolean,
      capitalLetter?: boolean
    ) =>
    (theme: Theme) =>
      css`
        position: relative;
        display: inline-block;
        color: ${theme.colors[color]()};
        font: 400 ${fontSizes[level]} ${fonts};
        font-weight: ${bold ? "bold" : ""};
        text-transform: ${capitalLetter ? "capitalize" : "none"};
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        ${url &&
        urlHover &&
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
  1: "15px/32px",
  2: "13px/24px",
  3: "12px/24px",
  4: "11px/16px",
};

export default paragraphStyles;
