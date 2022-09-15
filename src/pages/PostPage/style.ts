import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Wrapper = styled.article`
  width: auto;
  height: auto;
  padding: 0 5vh;
`;

export const WrapperMainImage = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2vh;
  margin-top: 2vh;
`;

export const MainImage = styled.img`
  width: 45vw;
  height: 22vw;
  object-fit: cover;
  float: left;
  border-radius: 20px;
`;

export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ArticleTitle = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 200;
  width: auto;
  font-size: 2.4em;
  margin-top: 3vh;
  margin-bottom: 1vh;
  height: auto;
`;

export const Article = styled.p`
  text-indent: 3vh;
  width: 90%;
  height: auto;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.4em;
  font-weight: 100;
  margin: 3vw auto;
  line-height: 1.4;
`;

export const WrapperAdditionalPhotos = styled.div`
  width: 90%;
  height: auto;
  padding: 5px 13px;
  background: #ababab1c;
  margin: 0 auto;
`;

export const InfoText = styled.p`
  margin: 0;
  margin-right: 15px;
  display: flex;
  align-items: center;
  color: gray;
`;

export const IconClock = styled(AccessTimeIcon)``;

export const ButtonsBlock = styled.div`
  background: #ababab1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;

  button {
    color: #a624dd;
  }
`;
