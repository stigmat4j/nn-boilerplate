/** @jsxImportSource @emotion/react */
"use client";

import React, { FC, ReactNode } from "react";
import { ColorNames } from "@/ui/theme/colors";
import Link from "next/link";
import styles from "./Paragraph.styles";

type Props = {
  level?: 1 | 2 | 3 | 4;
  children: ReactNode;
  url?: string;
  color?: ColorNames;
  bold?: boolean;
  onClick?: () => void;
};
const Paragraph: FC<Props> = ({
  level = 3,
  bold = false,
  children,
  url,
  color = "black",
  onClick,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <p
      css={styles.paragraph(color, level, bold, null, false, false)}
      className="paragraph"
      role="presentation"
      onClick={onClick}
    >
      {children}
    </p>
  );
};

export default Paragraph;
