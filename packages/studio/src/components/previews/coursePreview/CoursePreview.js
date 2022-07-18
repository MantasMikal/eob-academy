import React from "react";

import config from "../../../../config";

import styles from "./IframePreview.css";

const { siteUrl } = config;

export default function CoursePreview(props) {
  const { displayed } = props?.document || {};
  const slug = displayed?.slug?.current;
  if (!slug) {
    return <div>The post needs a slug before it can be previewed.</div>;
  }
  const url =
    process.env.NODE_ENV === "production"
      ? `${siteUrl}/courses/${slug}?preview`
      : `http://localhost:3000/courses/${slug}?preview=true`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
