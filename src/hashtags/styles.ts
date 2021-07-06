import styled from "styled-components";

const HashtagsContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
    height: 0;
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  max-width: 1024px;
  margin: 0px auto;
`;
export const HashtagItemContainer = styled.div`
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  height: 40px;

  background: rgb(126, 200, 186);
  border-radius: 4px;
  cursor: pointer;

  .title {
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
  }
  .hash-title {
    font-size: 14px;
    line-height: 22px;
    font-weight: bold;
  }

  .hash {
    font-size: 10px;
    line-height: 14px;
  }
`;

export default HashtagsContainer;
