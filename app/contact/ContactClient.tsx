// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from "react";
import Burger from "../../components/Burger/Burger.js";
import Menu from "../../components/Menu/Menu.js";
import Logo from "../../components/Logo/Logo.js";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme.js";
import { useOnClickOutside } from "../../hooks.js";
import styles from "../../styles/Contact.module.css";
import useWindowSize from "../../utils/useWindowSize";

interface ContactClientProps {
  contact: any;
  storeUrl: string;
}

export default function ContactClient({ contact, storeUrl }: ContactClientProps) {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

  const { email, title } = contact.fields;

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      // updated to ES6 <3
      // check GLITCH.raf ;)

      // magic demo(ns) config
      const CARD_IMAGE_URL = ""; // included at bottom as base64, can be a real image URL

      const GLITCH = {
        raf: true, // make it fast ?! :O (use requestAnimationFrame)
        delay: 100, // glitch interval delay (ignored if RAF=true)
        maxErrors: 130, // max 'glitch' errors ?

        cache: new Map(), // cant't touch this! :D
        timer: null, // tracker for fx updater
      };

      // glitch helpers
      const decodeImage = (imageData: string, encoder = "data:image/jpeg;base64,") =>
        imageData.replace(encoder, "");
      const encodeImage = (imageData: string, encoder = "data:image/jpeg;base64,") =>
        `${encoder}${imageData}`;

      const corruptImage = (imageData: string, maxErrors = 130) => {
        let corrupted = imageData;

        if (Math.random() > 0.8) {
          const errors = Math.round(Math.random() * maxErrors);

          for (let i = 0; i < errors; i++) {
            const l =
              1000 + Math.round(Math.random() * (corrupted.length - 1002));
            corrupted =
              corrupted.substr(0, l) +
              corrupted.charAt(l + 1) +
              corrupted.charAt(l) +
              corrupted.substr(l + 2);
          }
        }

        return encodeImage(corrupted);
      };

      // fetch image URL as base 64
      const fetchImageBase64 = (
        url = "",
        outputFormat = "image/jpeg",
        outputQuality = 0.8
      ) => {
        return new Promise((resolve, reject) => {
          if (!url) reject("Need img URL bro!");

          // const img = new Image();
          console.log(document);
          const img = document.createElement("img");
          img.crossOrigin = "Anonymous";
          img.onerror = () => reject("Image err!");
          img.onload = () => {
            let canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.height = img.height;
            canvas.width = img.width;

            ctx!.drawImage(img, 0, 0);

            const dataURL = canvas.toDataURL(outputFormat, outputQuality);
            resolve(dataURL);

            (canvas as any) = null;
          };

          img.src = url;
        });
      };

      // glitch FX helpers
      const glitchImage = (imgURL: string, cb: (data: string) => void) => {
        const imgData = GLITCH.cache.get(imgURL);
        const corrupted = corruptImage(imgData, GLITCH.maxErrors);
        cb(corrupted);
      };

      const cancelGlitch = (ticker: any) => {
        if (ticker) {
          if (GLITCH.raf) {
            cancelAnimationFrame(ticker);
          } else {
            clearInterval(ticker);
          }

          ticker = null;
        }
      };

      // 3d transform helpers
      const setBackground = (el: HTMLElement, bg: string) =>
        (el.style.backgroundImage = `url(${bg})`);
      const resetTransform = (el: HTMLElement, perspective = 800) =>
        (el.style.transform = `translate3d(0%, 0%, -${
          perspective / 2
        }px) rotateX(0deg) rotateY(0deg)`);

      const onMove = (ev: MouseEvent, el: HTMLElement) => {
        const { pageX, pageY } = ev;
        const { offsetWidth, offsetHeight } = el;
        const { left, top } = el.getBoundingClientRect();

        const cardX = left + offsetWidth / 2;
        const cardY = top + offsetHeight / 2;

        const angle = 25;
        const rotX = (cardY - pageY) / angle;
        const rotY = (cardX - pageX) / -angle;

        el.style.transform = `translate3d(0%, 0%, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      };

      // GLITCHY glitch!
      (async () => {
        let base64;

        try {
          // fetch & cache image data
          base64 = (await fetchImageBase64(CARD_IMAGE_URL || getDemoImage())) as string;
          GLITCH.cache.set(CARD_IMAGE_URL, decodeImage(base64));
        } catch (err) {
          throw new Error(err as string);
        }

        let ticker; // animation tracker

        // get card container & perspective
        const card = document.querySelector(".glitch-card") as HTMLElement;
        const perspective =
          getComputedStyle(card.parentElement!)
            .getPropertyValue("perspective")
            .replace("px", "") || "800";

        // create helper binds for current card
        const updateBackground = (bg: string) => setBackground(card, bg);
        const onCardMove = (ev: MouseEvent) => onMove(ev, card);

        const startGlitch = (url: string, cb: (data: string) => void) => {
          if (GLITCH.raf) {
            ticker = requestAnimationFrame(() => startGlitch(url, cb));
            glitchImage(url, cb);
          } else {
            ticker = setInterval(() => glitchImage(url, cb), GLITCH.delay);
          }
        };

        const onHover = () => {
          startGlitch(CARD_IMAGE_URL, updateBackground);
          const atag = document.querySelector(".contact") as HTMLElement;
          atag.style.display = "none";
          // card.addEventListener("mousemove", onCardMove);
        };

        const onOut = () => {
          cancelGlitch(ticker);
          // card.removeEventListener("mousemove", onCardMove);

          resetTransform(card, parseInt(perspective)); // reset card
          const atag = document.querySelector(".contact") as HTMLElement;
          atag.style.display = "block";
        };

        // set current card background texture
        setBackground(card, base64);

        // add mouse interaction
        card.addEventListener("mouseover", onHover);
        card.addEventListener("mouseout", onOut);
        card.addEventListener("mousemove", onCardMove);
      })(); // just do it...

      function getDemoImage() {
        return "data:image/jpeg;base64,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";
      }
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div ref={node}>
          <Menu open={open} setOpen={setOpen} store={storeUrl} />
          <Burger open={open} setOpen={setOpen} /> <Logo />
        </div>
        <div className={`${styles.container} container fadeIn`}>
          <div className={styles.flex}>
            <div id="wrap">
              <div className="glitch-card"> </div>
            </div>
            <div className={styles.card}>
              <img src="/images/envelope.png" alt="envelope" />
            </div>
            <a className="contact" href={`mailto:${email}`}>
              <h3> {email} </h3>
            </a>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
