import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Wrapper = styled.article`
  width: 90%;
  min-height: 75vw;
  padding: 3vw 1vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;
export const WrapperMainImage = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  // position: relative;
  // right: 15%;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;
export const MainImage = styled.img`
  width: 45vw;
  height: 22vw;
  object-fit: cover;
`;
export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const WrapperArticleText = styled.div`
  width: 100%;
  border-top: 1px solid #ababab;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArticleTitle = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.8em;
  font-weight: 200;
  border-bottom: 1px solid #ababab;
  width: 31vw;
  text-align: center;
  margin: 5px 10px;
  height: auto;
`;
export const Article = styled.p`
  width: 90%;
  height: auto;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1.4em;
  font-weight: 100;
  margin: 3vw 2vw;
`;
export const WrapperAdditionalPhotos = styled.div`
  width: 90%;
  padding: 0px 13px;
  width: 90%;
  background: #ababab1c;
  & .MuiImageList-root {
  }
`;
export const InfoAboutPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 62%;
  margin-top: 9%;
  height: auto;
  border: 1px solid #b86ed7;
  border-radius: 33px 33px;
`;
export const InfoText = styled.p`
  margin: 10px;
  display: flex;
  align-items: center;
`;
export const IconClock = styled(AccessTimeIcon)`

`;

export const ButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 9%;
  border-top: 1px solid #ababab;
  padding-top: 20px;
  & button {
    width: 125px;
  }
}
`;
export const AuthAndControlBlock = styled.div`
width: 25%;
height: 22vw;
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
`;
