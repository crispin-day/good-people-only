'use client'

import { useState, useRef } from "react";
import Burger from "../components/Burger/Burger.js";
import Menu from "../components/Menu/Menu.js";
import Logo from "../components/Logo/Logo.js";
import HeadInfo from "../components/HeadInfo/HeadInfo.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme.js";
import { useOnClickOutside } from "../hooks.js";
import styles from "../styles/About.module.css";

export default function NotFound() {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <HeadInfo />
      <div>
        <div ref={node}>
          <Menu open={open} store="" />
          <Burger open={open} setOpen={setOpen} />
          <Logo />
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h2>Page Not Found</h2>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
