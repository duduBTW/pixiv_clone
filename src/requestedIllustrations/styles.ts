import styled from "styled-components";

export const RequestedIllustrationItemContainer = styled.div`
  width: 392px;
  height: 364px;
  padding: 20px 24px 0px;

  background-color: rgba(0, 0, 0, 0.16);
  border-radius: 16px;

  display: grid;
  grid-template-rows: 1fr auto;

  .title {
    line-height: 24px;
    word-break: break-word;
    max-height: 72px;
    color: rgba(255, 255, 255, 0.68);
  }

  .hashtags {
    color: rgba(255, 255, 255, 0.38);
  }

  .image {
    display: flex;
    justify-content: center;
    padding-top: 24px;

    img {
      width: 184px;
      height: 184px;
      border-radius: 16px;
      position: relative;

      object-fit: cover;
      object-position: center center;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: -184px;
        background: red;

        border-right: 184px solid transparent;
        border-bottom: 184px solid rgba(0, 0, 0, 0.16);
      }
      cursor: pointer;
      transition: opacity 0.4s ease;

      :hover {
        transition: opacity 0.4s ease;
        opacity: 0.9;
      }
    }
  }
`;

const RequestedIllustrationsContainer = styled.section`
  max-width: 1024px;
  margin: 0px auto;

  .arts-request {
    margin-top: 12px;
    display: flex;

    gap: 26px;
    overflow: hidden;
  }
`;

export default RequestedIllustrationsContainer;
