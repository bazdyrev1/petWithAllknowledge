import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 30%;
  margin: 15px 5px;
  padding: 3px 0px;
  font-family: 'Josefin Sans',sans-serif;
  &:hover {
    border-radius: 0px 0px 10px 10px;
    box-shadow: 1px 3px 7px 0px grey;
  }
  & a {
    text-decoration: none;
    color: #666;
  }
`;
export const MainImageBox = styled.div`
  overflow: hidden;

  justify-content: center;
`;
export const MainImagePreviev = styled.img`
  width: 23vw;
  height: 13vw;
  object-fit: cover;
`;
export const ShortInfoPost = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TitlePost = styled.p`
  font-size: 1.4em;
  font-weight: 500;
  margin: 0;
`;

export const AritcleWrapper = styled.div`
  width: 91%;
  height: auto;
  padding: 0px 15px;
`;
export const ArticlePreviev = styled.p`
  margin: 0;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1em;
  font-weight: 500;
  
`;
export const InformationAboutAuthor = styled.div`
  width: 91%;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const AuthorNameAndData = styled.div`

`
export const InfoParagraph = styled.p`
margin: 1px 10px;
font-weight: 500;
`