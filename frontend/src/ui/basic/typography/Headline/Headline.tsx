/** @jsxImportSource @emotion/react */
"use client";

import React, { FC, ReactNode } from "react";
import { ColorNames } from "@/ui/theme/colors";
import Link from "next/link";
import styles from "./Headline.styles";

type Props = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  url?: string;
  color?: ColorNames;
};
const Headline: FC<Props> = ({ level = 3, children, url, color = "black" }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return url ? (
    <Link href={url}>
      <a
        css={styles.headline(color, level, url)}
        className="headline"
        href={url}
      >
        {children}
      </a>
    </Link>
  ) : (
    <Tag css={styles.headline(color, level)} className="headline">
      {children}
    </Tag>
  );
};

export default Headline;
