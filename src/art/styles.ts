import styled from "styled-components";

export const CreatorContainer = styled.div`
  transition: all 0.4s ease;
  cursor: pointer;
  margin-top: 4px;
  display: flex;
  gap: 4px;

  :hover {
    transition: all 0.4s ease;
    .name {
      color: rgba(255, 255, 255, 0.38);
    }

    .pfp-container {
      img {
        opacity: 0.9;
      }
    }
  }

  .name {
    line-height: 22px;
    font-size: 14px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.68);
  }

  .pfp-container {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center center;
    }
  }
`;

interface IArtContentContainer {
  width: string;
  height: string;
}

export const ArtContentContainer = styled.div<IArtContentContainer>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  display: block;

  &::before {
    position: absolute;
    display: block;
    content: "";
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.02);
  }

  .image {
    transition: opacity 0.2s ease 0s;
    width: 100%;
    height: 100%;
    z-index: 0;

    object-fit: cover;
    object-position: center center;
    border-radius: 8px;

    cursor: pointer;
    position: relative;

    background-color: rgb(51, 51, 51);

    :hover {
      opacity: 0.85;
    }
  }
`;
const ArtContainer = styled.div`
  .title {
    margin-top: 4px;

    line-height: 22px;
    font-size: 14px;
    font-weight: bold;
  }
`;

export default ArtContainer;
