import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin: 10px 0px;
`;

export const AboutBlogBox = styled.section`
  width: 100%;
  display: flex;
  height: 10vw;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5vh;
`;

export const NameBlog = styled.h1`
  font-size: 2.2em;
  margin: 10px 0px 10px 15px;
  font-weight: 400;
`;

export const MainIdea = styled.p`
  margin: 10px 0px 10px 15px;
  font-size: 1.3em;
  font-weight: 400;
`;

export const ContentBox = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 100ch;
  .MuiBox-root{
    background-color: #ffffff00;
  }
  .MuiTabs-root {
    width: 15vw;
  }

  .Mui-selected {
    color: primary;
  }

  .MuiButtonBase-root {
    font-weight: bold;
  }

  .MuiTypography-root {
    width: 60vw;
  }

  .MuiTabs-indicator {
    background-color: #ad6cd0;
  }

  .MuiTabs-flexContainer {
    button {
      color: #9c60f1;
      margin: 10px 0;
      box-shadow: 0px 0px 1px;
      font-size: 1em;
      font-weight: 400;
    }
    
  }
`;

export const ColorWords = styled.span`
  color: #a838c3;
`