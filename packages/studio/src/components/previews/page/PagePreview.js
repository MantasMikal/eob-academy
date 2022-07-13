import React from "react";

import config from "../../../../config";

import styles from "./IframePreview.css";

const { siteUrl } = config;

export default function PagePreview(props) {
  const { slug } = props;
  const { displayed } = props.document;
  const pageSlug = slug || `/${displayed?.slug?.current}`;

  const url =
    process.env.NODE_ENV === "production"
      ? `${siteUrl}${pageSlug}?preview=true`
      : `http://localhost:3000${pageSlug}?preview=true`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
