import React from "react";
import Art from "../art";
import Title from "../shared/title";
import RecommendedWorksContainer from "./styles";

export default function RecommendedWorks() {
  const arts: string[] = [
    "/recommendedWorks/91019930_p0_master1200.jpg",
    "/recommendedWorks/90991424_p0_master1200.jpg",
    "/recommendedWorks/90991371_p0_master1200.jpg",
    "/recommendedWorks/90991618_p0_master1200.jpg",
    "/recommendedWorks/91020785_p0_master1200.jpg",
    "/recommendedWorks/91018188_p0.jpg",
    "/recommendedWorks/91020947_p0_custom1200.jpg",
    "/recommendedWorks/91010504_p0_square1200.jpg",
  ];
  const size = "184px";

  return (
    <RecommendedWorksContainer>
      <Title>Recommended Works</Title>
      <div className="arts">
        {arts.map((art) => (
          <Art key={art} url={art} title={"Title"} width={size} height={size} />
        ))}
      </div>
    </RecommendedWorksContainer>
  );
}
