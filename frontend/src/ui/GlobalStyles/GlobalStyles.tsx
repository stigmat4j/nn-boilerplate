/** @jsxImportSource @emotion/react */
"use client";

import React from "react";
import { Global } from "@emotion/react";
import styles from "./GlobalStyles.styles";

export const GlobalStyles = () => <Global styles={[styles.global]} />;
