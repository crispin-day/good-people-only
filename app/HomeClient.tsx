'use client'

import { useState, useEffect, useRef, useCallback } from "react";
import { ErrorBoundary } from "../components/ErrorBoundary";
import dynamic from "next/dynamic";
import Burger from "../components/Burger/Burger.js";
import Menu from "../components/Menu/Menu.js";
import Logo from "../components/Logo/Logo.js";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global";
import { theme } from "../theme.js";
import { useOnClickOutside } from "../hooks.js";
import styles from "../styles/Home.module.css";
import useWindowSize from "../utils/useWindowSize";

const Test = dynamic(
  () => import("../components/Test").then((mod) => ({ default: mod.Test })),
  { ssr: false }
);

export default function HomeClient({ storeUrl }: { storeUrl: string }) {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  const size = useWindowSize();

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (size.width && size.width < 768) {
      const test = document.querySelector("body");
      if (test) {
        test.style.position = "relative";
        test.style.margin = "0";
        test.style.overflow = "hidden";
        test.style.padding = "0";
        test.style.height = "90vh";
      }
    }
  }, [size]);

  return (
    <ThemeProvider theme={theme}>
      <div className="home">
        <h1>Good People Only</h1>
        <GlobalStyles />
        <div ref={node}>
          <Menu open={open} store={storeUrl} />
          <Burger open={open} setOpen={setOpen} />
          {/* <Logo /> */}
        </div>
        <ErrorBoundary><Test /></ErrorBoundary>

        <div className={styles.container}></div>
      </div>
    </ThemeProvider>
  );
}
