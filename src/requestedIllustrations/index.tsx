import React from "react";
import RequestedIllustrationsContainer from "./styles";
import Title from "../shared/title";
import RequestedIllustrationItem from "./item";

export default function RequestedIllustrations() {
  const arts = [
    "/requestedIllustrations/90318727_p0_square1200.jpg",
    "/requestedIllustrations/89674448_p0_master1200.jpg",
    "/requestedIllustrations/90435605_p0_master1200.jpg",
  ];

  return (
    <RequestedIllustrationsContainer>
      <Title>Requested illustrations</Title>
      <div className="arts-request">
        {arts.map((art) => (
          <RequestedIllustrationItem
            key={art}
            image={art}
            hashtags={["#teste"]}
            title={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero cupiditate sunt!"
            }
          />
        ))}
      </div>
    </RequestedIllustrationsContainer>
  );
}
