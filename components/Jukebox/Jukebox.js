import React, { useRef } from "react";
import styles from "../../styles/Jukebox.module.css";

function ArtistCard({ name, site, url, isMiddle, isLast }) {
  const imageRef = useRef();
  return (
    <a
      className={`${isMiddle ? styles.active : ""} ${styles.artist} ${isLast ? styles.last : ""}`}
      href={site}
      ref={imageRef}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => {
        const active = document.querySelector(`.${styles.active}`);
        if (active) {
          active.classList.remove(styles.active);
        }
      }}
    >
      <img src={url} alt={name} /> <p> {name} </p>
    </a>
  );
}

export default function Jukebox({ images }) {
  const middle = images[(images.length / 2) | 0];

  return (
    <div className={styles.jukebox}>
      <div className={styles.flex}>
        <div className={`${styles.box} ${styles.flex}`}>
          {images &&
            images.map(({ name, site, url }, i) => (
              <ArtistCard
                key={name}
                name={name}
                site={site}
                url={url}
                isMiddle={name === middle.name}
                isLast={images.length === i + 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
