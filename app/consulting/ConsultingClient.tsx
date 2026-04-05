// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from "react";
import Burger from "../../components/Burger/Burger.js";
import Menu from "../../components/Menu/Menu.js";
import Logo from "../../components/Logo/Logo.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme.js";
import { useOnClickOutside } from "../../hooks.js";
import styles from "../../styles/Consulting.module.css";
import useWindowSize from "../../utils/useWindowSize";

interface ConsultingClientProps {
  consulting: any;
  storeUrl: string;
}

export default function ConsultingClient({ consulting, storeUrl }: ConsultingClientProps) {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  const { title, description, email } = consulting.fields;

  useEffect(() => {
    if (open) {
      const test = document.querySelector("#__next");
      if (test) {
        (test as HTMLElement).style.overflow = "hidden";
        (test as HTMLElement).style.height = "100vh";
      }
    } else {
      const test = document.querySelector("#__next");
      if (test) {
        (test as HTMLElement).style.overflow = "visible";
        (test as HTMLElement).style.height = "auto";
      }
    }
  }, [setOpen, open]);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 768) {
      const test = document.querySelector("body");
      if (test) {
        test.style.overflow = "auto";
        test.style.overflowX = "hidden";
        test.style.position = "initial";
      }
    }
  }, [size]);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} store={storeUrl} />
          <Burger open={open} setOpen={setOpen} /> <Logo />
        </div>
        <div className={`${styles.container} container fadeIn`}>
          <div className={styles.title}>
            <h2> {title} </h2>
          </div>
          <div className={styles.flex}>
            {description.content.map((paragraph: any) => (
              <p key={paragraph.content[0].value}>
                {paragraph.content[0].value}
              </p>
            ))}
            <div className={styles.bottom}>
              <img src="/images/envelope.png" alt="envelope" />
              <a href={`mailto:${email}`}> {email} </a>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
