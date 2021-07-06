import styled from "styled-components";

const ArticlesContainer = styled.section`
  max-width: 1024px;
  margin: 0px auto;

  .articesContent {
    margin-top: 12px;
    display: flex;
    gap: 26px;
    overflow: hidden;

    .item {
      flex-grow: 1;
      width: 392px;
      height: 288px;
      background-color: red;
      display: block;
      position: relative;

      ::before {
        content: "";
        z-index: 1;
        position: absolute;
        inset: 0px;
        top: 50%;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.65) 0%,
          rgba(255, 255, 255, 0) 100%
        );
        border-radius: 8px;
      }

      img {
        border-radius: 10px;
        width: 392px;
        height: 288px;

        object-fit: cover;
      }

      .title {
        z-index: 2;
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;

        padding: 0px 24px 24px;

        font-size: 20px;
        font-weight: bold;
      }
    }
  }
`;

export default ArticlesContainer;
