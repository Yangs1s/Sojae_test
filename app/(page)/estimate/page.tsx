"use client";

import React from "react";
import dynamic from "next/dynamic";

const PostEstimate = dynamic(
  () => import("@/app/_component/containers/estimate/PostEstimate"),
  { ssr: false }
);

export default function Page() {
  return <PostEstimate />;
}
