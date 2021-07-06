import React from "react";
import { ArtContentContainer } from "./styles";

export default function ArtContent({
  url,
  width,
  height,
}: {
  url: string;
  width: string;
  height: string;
}) {
  return (
    <ArtContentContainer width={width} height={height}>
      <img src={url} className="image" />
    </ArtContentContainer>
  );
}
