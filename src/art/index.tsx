import { motion } from "framer-motion";
import React from "react";
import ArtContent from "./art";
import Creator from "./creator";
import ArtContainer from "./styles";

export default function Art({
  url,
  title,
  width,
  height,
}: {
  url: string;
  title: string;
  width: string;
  height: string;
}) {
  return (
    <ArtContainer>
      <ArtContent width={width} height={height} url={url} />
      <div className="title">{title}</div>
      <Creator url={url} />
    </ArtContainer>
  );
}
