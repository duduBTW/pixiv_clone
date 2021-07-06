/* eslint-disable @next/next/no-img-element */
import React from "react";
import Creator from "../art/creator";
import { RequestedIllustrationItemContainer } from "./styles";

export default function RequestedIllustrationItem({
  title,
  hashtags,
  image,
}: {
  title: string;
  image: string;
  hashtags: string[];
}) {
  return (
    <div>
      <RequestedIllustrationItemContainer>
        <div className="title">{title}</div>
        <div className="hashtags">
          {hashtags.map((hashtag) => (
            <div key={hashtag}>{hashtag}</div>
          ))}
        </div>
        <div style={{ height: 24 }} />
        <Creator hideTitle url={image} />
        <div className="image">
          <img src={image} alt={title} />
        </div>
      </RequestedIllustrationItemContainer>
      <div style={{ height: 8 }} />
      <Creator url={image} />
    </div>
  );
}
