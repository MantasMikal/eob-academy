import React from "react";

import config from "../../../../config";

import styles from "./IframePreview.css";

const { siteUrl: remoteUrl } = config;
const localUrl = "http://localhost:3000";

export default function CoursePreview(props) {
  const { displayed } = props?.document || {};
  const slug = displayed?.slug?.current;
  if (!slug) {
    return <div>The post needs a slug before it can be previewed.</div>;
  }

  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;
  const previewUrl = new URL(baseUrl);
  previewUrl.pathname = `/api/preview`;
  previewUrl.searchParams.append(`slug`, `/courses/${slug}` ?? `/`);

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe title="preview" src={previewUrl.toString()} frameBorder={"0"} />
      </div>
    </div>
  );
}
