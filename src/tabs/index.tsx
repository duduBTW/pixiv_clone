import React, { useState } from "react";
import TabsContainer, {
  ContentRatingContainer,
  TabItemContainer,
} from "./styles";

export default function Tabs({
  tabs,
  active,
  changeActived,
}: {
  tabs: string[];
  active: string;
  changeActived: (tab: string) => void;
}) {
  const contentRatings: string[] = ["ALL", "R-18"];

  const [activeRating, setActiveRating] = useState("ALL");

  return (
    <TabsContainer>
      <div className="tabs">
        {tabs.map((tab) => (
          <TabItemContainer
            active={active === tab}
            onClick={() => changeActived(tab)}
            key={tab}
          >
            {tab}
          </TabItemContainer>
        ))}
      </div>

      <div className="content-rating">
        {contentRatings.map((contentRating) => (
          <ContentRatingContainer
            active={activeRating === contentRating}
            key={contentRating}
            onClick={() => setActiveRating(contentRating)}
          >
            {contentRating}
          </ContentRatingContainer>
        ))}
      </div>
    </TabsContainer>
  );
}
