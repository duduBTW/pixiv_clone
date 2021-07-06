import React from "react";
import DailyRankingContainer from "./styles";
import Link from "next/link";
import Title from "../shared/title";
import Art from "../art";

export default function DailyRanking({ active }: { active: string }) {
  const arts: string[] = [
    "/recommendedWorks/91019930_p0_master1200.jpg",
    "/recommendedWorks/90991424_p0_master1200.jpg",
    "/recommendedWorks/90991371_p0_master1200.jpg",
    "/recommendedWorks/90991618_p0_master1200.jpg",
    "/recommendedWorks/91020785_p0_master1200.jpg",
  ];
  const size = "288px";

  return (
    <DailyRankingContainer>
      <div className="header">
        <div className="title">Daily ranking</div>
        <div className="date">
          <Title>Jul 5th ranking</Title>

          <Link href="/seeAll">
            <div className="see-all">See all</div>
          </Link>
        </div>
      </div>

      <div className="arts-ranking">
        {arts.map((art) => (
          <Art key={art} url={art} title={"Title"} width={size} height={size} />
        ))}
      </div>
    </DailyRankingContainer>
  );
}
