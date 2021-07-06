import React, { useState } from "react";
import Hashtags from "../src/hashtags";
import Header from "../src/header";
import DailyRanking from "../src/dailyRanking";
import Tabs from "../src/tabs";
import RecommendedWorks from "../src/recommendedWorks";
import RequestedIllustrations from "../src/requestedIllustrations";
import Articles from "../src/articles";

const height = 40;

export default function Home() {
  const tabs: string[] = ["Illustrations", "Manga", "Novels"];
  const [active, setActive] = useState("Illustrations");

  const changeActived = (tab: string) => {
    setActive(tab);
  };
  return (
    <div>
      {/* <Header /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Hashtags />
      <div style={{ height }} />
      <Tabs changeActived={changeActived} active={active} tabs={tabs} />
      {active === "Illustrations" && (
        <>
          <div style={{ height }} />
          <RecommendedWorks />
        </>
      )}
      <div style={{ height: 80 }} />
      <DailyRanking active={active} />
      <div style={{ height: 80 }} />
      <RequestedIllustrations />
      <div style={{ height: 80 }} />
      <Articles />
      <div style={{ height: 80 }} />
    </div>
  );
}
