'use client'

import { Suspense, useState, useRef, useEffect } from "react";
import Burger from "../../components/Burger/Burger.js";
import Menu from "../../components/Menu/Menu.js";
import Logo from "../../components/Logo/Logo.js";
import SideText from "../../components/SideText/SideText.js";
import { useOnClickOutside } from "../../hooks.js";
import Jukebox from "../../components/Jukebox/Jukebox.js";
import ImageSquares from "../../components/ImageSquares/index.jsx";
import useWindowSize from "../../utils/useWindowSize";

interface Artist {
  fields: {
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    name: string;
    site: string;
  };
}

interface ManagementClientProps {
  artists: Artist[];
  storeUrl: string;
}

export default function ManagementClient({ artists, storeUrl }: ManagementClientProps) {
  const images = [
    {
      position: [0, 0, 1.5],
      rotation: [0, 0, 0],
      url: artists[0].fields.image.fields.file.url,
      name: artists[0].fields.name,
      site: artists[0].fields.site,
    },
    {
      position: [-1, 0, 1.8],
      rotation: [0, Math.PI / 3.5, 0],
      url: artists[2].fields.image.fields.file.url,
      name: artists[2].fields.name,
      site: artists[2].fields.site,
    },
    {
      position: [-1, 0, 1.8],
      rotation: [0, -Math.PI / 3.5, 0],
      url: artists[1].fields.image.fields.file.url,
      name: artists[1].fields.name,
      site: artists[1].fields.site,
    },
  ];

  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));

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
    if (size.width && size.width < 768) {
      const test = document.querySelector("body");
      if (test) {
        test.style.overflow = "auto";
        test.style.overflowX = "hidden";
        test.style.position = "initial";
      }
    }
  }, [size]);

  return (
    <div>
      <div ref={node}>
        <Menu open={open} store={storeUrl} />
        <Burger open={open} setOpen={setOpen} /> <Logo />
      </div>
      <div>
        <SideText
          lineSize={"artists"}
          copy={"Good People Artists Management"}
        />
        <ImageSquares images={images} />
      </div>
    </div>
  );
}
