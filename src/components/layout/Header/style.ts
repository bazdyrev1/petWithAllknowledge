import styled from "styled-components";
import { ReactComponent as ReactLogo } from "./logoImg/logoIcon.svg";

export const Wrapper = styled.header`
  width: 100%;
  height: 4vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ababab;
  padding-bottom: 17px;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  justify-content: space-around;
  box-sizing: border-box;
  margin-left: 2%;
`;

export const ReactLogoIcon = styled(ReactLogo)`
  margin-left: 15px;
  width: 3vw;
  transform: rotate(-45deg);
`;

export const NameBlog = styled.p`
  font-size: 2em;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  margin-left: 15px;
  cursor: default;
`;

export const BoldText = styled.span`
  color: #a838c3;
`;
