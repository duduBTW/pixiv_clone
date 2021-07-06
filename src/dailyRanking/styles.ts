import styled from "styled-components";

const DailyRankingContainer = styled.section`
  max-width: 1024px;
  margin: 0px auto;
  .header {
    .date {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .see-all {
        transition: color 0.2s ease-in-out;
        color: rgba(255, 255, 255, 0.36);

        font-size: 87.5%;
        cursor: pointer;

        :hover {
          color: rgba(255, 255, 255, 0.68);
        }
      }
    }

    .title {
      font-size: 14px;
      line-height: 22px;
      font-weight: normal;
      color: rgba(255, 255, 255, 0.36);
    }

    margin-bottom: 12px;
  }

  .arts-ranking {
    margin-top: 12px;
    display: flex;
    gap: 26px;

    flex-wrap: nowrap;
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
  }
`;

export default DailyRankingContainer;
