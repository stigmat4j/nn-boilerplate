import React, { ReactNode } from "react";
import RootStyleRegistry from "@/ui/emotion";

type Props = {
  children: ReactNode;
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head />
      <RootStyleRegistry>
        <body>{children}</body>
      </RootStyleRegistry>
    </html>
  );
}
