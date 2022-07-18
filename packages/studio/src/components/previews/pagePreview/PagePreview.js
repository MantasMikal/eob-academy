import React from "react";

import config from "../../../../config";

import styles from "./IframePreview.css";

const { siteUrl: remoteUrl } = config;
const localUrl = "http://localhost:3000";

export default function PagePreview({ slug }) {
  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const formattedSlug = `${slug}`;
  const previewUrl = `${baseUrl}/api/preview?slug=${formattedSlug}`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe title="preview" src={previewUrl} frameBorder={"0"} />
      </div>
    </div>
  );
}
