import React from "react";

import config from "../../../../config";

import styles from "./IframePreview.css";

const { siteUrl } = config;

export default function PagePreview({ slug }) {
  const url =
    process.env.NODE_ENV === "production"
      ? `${siteUrl}${slug}?preview=true`
      : `http://localhost:3000${slug}?preview=true`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
