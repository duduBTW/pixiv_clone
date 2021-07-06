import { motion } from "framer-motion";
import styled from "styled-components";

const TabsContainer = styled.nav`
  max-width: 1024px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;

  .tabs {
    display: flex;
  }

  .content-rating {
    display: flex;
  }
`;

interface ITabItemContainer {
  active: boolean;
}

export const TabItemContainer = styled.div<ITabItemContainer>`
  padding: 10px 24px;
  cursor: pointer;

  font-weight: bold;
  font-size: 16px;

  :hover {
    color: ${(props) => (props.active ? "rgba(255, 255, 255, 1)" : "#b7b7b7")};
  }

  transition: color 0.4s ease-in-out;

  color: ${(props) =>
    props.active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.36)"};

  border-top: 4px solid ${(props) => (props.active ? "#0096fa" : "transparent")};
`;

export const ContentRatingContainer = styled.div<ITabItemContainer>`
  transition: color 0.2s ease-in-out;

  height: 100%;
  padding: 0px 24px;
  font-size: 14px;
  line-height: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transition: color 0.2s ease-in-out;
    color: ${(props) => (props.active ? "#C0C0C0" : "#b7b7b7")};
  }
  color: ${(props) => (props.active ? "#C0C0C0" : "#707070")};
  background: ${(props) => (props.active ? "#3A3A3A" : "transparent")};
  font-weight: bold;
  border-radius: 200px;
  cursor: ${(props) => (props.active ? "default" : "pointer")};
`;

export default TabsContainer;
