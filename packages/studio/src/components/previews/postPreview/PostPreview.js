import React from "react";

import config from "../../../../config";

import styles from "./IframePreview.css";

const { siteUrl } = config;

export default function PostPreview(props) {
  const { displayed } = props?.document || {};
  const slug = displayed?.slug?.current;
  if (!slug) {
    return <div>The post needs a slug before it can be previewed.</div>;
  }
  const url =
    process.env.NODE_ENV === "production"
      ? `${siteUrl}/blog/${slug}?preview`
      : `http://localhost:3000/blog/${slug}/?preview`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
