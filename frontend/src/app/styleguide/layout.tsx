/** @jsxImportSource @emotion/react */
"use client";

import { ReactNode } from "react";
import styles from "./layout.styles";
import Headline from "@/typo/Headline/Headline";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function PageLayout({ children }: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  const links = ["typography", "buttons", "icons"];

  return (
    <div css={styles.wrapper}>
      <div css={styles.tabsWrapper}>
        {links.map((link, key) => (
          <div css={styles.tab(selectedLayoutSegment === link)} key={key}>
            <Link href={`/styleguide/${link}`}>
              <Headline
                level={5}
                color={selectedLayoutSegment === link ? "violet" : "black"}
              >
                {link.toUpperCase()}
              </Headline>
            </Link>
          </div>
        ))}
      </div>
      <div css={styles.tabContent}>{children}</div>
    </div>
  );
}
