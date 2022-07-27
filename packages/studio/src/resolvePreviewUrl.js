import React from "react";

import config from "../config";

const { siteUrl: remoteUrl } = config;
const localUrl = "http://localhost:3000";

export default function resolvePreviewUrl(slug) {
  if (typeof slug !== "string") {
    return <div>The post needs a slug before it can be previewed.</div>;
  }

  const baseUrl =
    window.location.hostname === "localhost" ? localUrl : remoteUrl;

  const formattedSlug = `${slug}`;
  const previewUrl = `${baseUrl}/api/preview?slug=${formattedSlug}`;
  return previewUrl;
}
