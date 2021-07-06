/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CreatorContainer } from "./styles";

export default function Creator({
  url,
  hideTitle = false,
}: {
  url: string;
  hideTitle?: boolean;
}) {
  return (
    <CreatorContainer>
      <div className="pfp-container">
        <img src={url} className="pfp" />
      </div>
      <div className="name">{!hideTitle ? "あかもく" : ""}</div>
    </CreatorContainer>
  );
}
