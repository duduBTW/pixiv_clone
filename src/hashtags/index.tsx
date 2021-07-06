import React from "react";
import HashtagsContainer, { HashtagItemContainer } from "./styles";
import Link from "next/link";

interface IHashtag {
  title?: string;
  hashtag?: string;
  color?: string;
}

function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default function Hashtags() {
  const hashtags: IHashtag[] = [
    {
      title: "Fate/Grand Order",
      hashtag: "#FGO",
      color: "rgb(126, 200, 186)",
    },
    {
      title: "ba-gesuto",
      hashtag: "#バーゲスト(Fate)",
    },
    {
      hashtag: "#girl",
    },
    {
      title: "Pokémon",
      hashtag: "#ポケモン",
    },
    {
      hashtag: "#NEWGAME!",
    },
  ];

  return (
    <HashtagsContainer>
      {Array.from(Array(20).keys()).map((hashtag) => {
        var title = makeid(Math.floor(Math.random() * 15));
        return (
          <HashtagItemContainer key={hashtag}>
            {title && <div className="title">{title}</div>}
            <Link href="/a">
              <div className={title ? "hash" : "hash-title"}>#teste</div>
            </Link>
          </HashtagItemContainer>
        );
      })}
    </HashtagsContainer>
  );
}
