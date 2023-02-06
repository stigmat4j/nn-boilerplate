import { css, Theme } from "@emotion/react";

const layoutStyles = {
  wrapper: css`
    display: flex;
    flex-direction: column;
  `,
  tabsWrapper: css`
    display: flex;
    flex-direction: row;
  `,
  tab: (isActive: boolean) => (theme: Theme) =>
    css`
      padding: 4px 8px;
      ${isActive &&
      `
      border-bottom: 2px solid ${theme.colors.violet()};
      background: ${theme.colors.grey(0.1)};
    `}
    `,
  tabContent: css``,
};

export default layoutStyles;
