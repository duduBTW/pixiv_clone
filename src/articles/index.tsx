/* eslint-disable @next/next/no-img-element */
import React from "react";
import Title, { SubTitle } from "../shared/title";
import ArticlesContainer from "./styles";

export default function Articles() {
  var articesContent = [
    {
      title:
        "Drawings of Girls in Apocalyptic Ruins - Within the Decaying Ruins of Society",
      image: "/articles/82517882_p0_master1200.jpg",
    },
    {
      title: "Drawings of Sun Visors - No More Squinting!",
      image: "/articles/81725477_p0_master1200.jpg",
    },
    {
      title:
        "Drawings of Characters Hugging Their Knees - A Little Vulnerable...",
      image: "/articles/82732066_p0_master1200.jpg",
    },
    {
      title: "Drawings of Paper Lanterns - Soft, Flickering Lights",
      image: "/articles/84556958_p0_master1200.jpg",
    },
  ];

  return (
    <ArticlesContainer>
      <SubTitle>Newest articles on pixivision</SubTitle>
      <Title>Newest articles on pixivision</Title>
      <div className="articesContent">
        {articesContent.map((articesContentItem) => (
          <ArticleItem key={articesContentItem.image} {...articesContentItem} />
        ))}
      </div>
    </ArticlesContainer>
  );
}

export function ArticleItem({ title, image }) {
  return (
    <div className="item">
      <img src={image} alt={title}></img>
      <div className="title">{title}</div>
    </div>
  );
}
