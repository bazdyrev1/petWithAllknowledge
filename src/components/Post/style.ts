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
  font-family: 'Roboto', sans-serif;
  
  :hover {
    background: #e3c8f21c;
    box-shadow: 0px 0px 1px 0px;
  }

  a {
    text-decoration: none;
    color: #666;
  }
`;

export const MainImageBox = styled.div`
  overflow: hidden;
  width: 100;
  justify-content: center;
`;

export const MainImagePreview = styled.img`
  width: 100%;
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
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1.4em;
  font-weight: 500;
  margin: 5px;
`;

export const ArticleWrapper = styled.div`
  width: 91%;
  height: auto;
  padding: 0px 15px;
  height: 13vh;
`;

export const ArticlePreview = styled.p`
  margin-bottom: 5px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 1em;
  font-weight: 500;
  min-width: 5vh;
`;

export const InformationAboutAuthor = styled.div`
  width: 91%;
  padding: 0 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
`;

export const AuthorNameAndData = styled.div``;

export const InfoParagraph = styled.p`
  margin: 1px 10px;
  font-weight: 500;
`;

export const ControlButtons = styled.div`
  color: #9c27b0;
`;
