import React from "react";
import styled from "styled-components";

export const Wrapper = styled.main`
width: 100vw;
height: auto;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
margin: 10px 0px;
`
export const AboutBlogBox = styled.section`
width: 100%;
display: flex;
height: 8vw;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin: 0px 0px 25px 10vw;
font-family: 'Josefin Sans', sans-serif;
`
export const NameBlog = styled.h1`
font-size: 2.2em;
margin: 10px 0px 10px 15px;
font-weight: 100;

`
export const MainIdea = styled.p`
margin: 10px 0px 10px 15px;
font-size: 1.3em;
font-weight: 100;
`
export const ContentBox = styled.article`
margin-left: 15px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
min-height: 75vw;
// overflow: hidden;

& .MuiTabs-root{
    width: 15vw;
   
}
& 	.Mui-selected{
    color: primary;
}
& .MuiButtonBase-root{
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
}
& .MuiBox-root {
    padding: 0px 24px;
    
    height: 100%;
    width: 100%;
    // padding: 0px 24px;
    // height: 100%;
    // display: flex;
    // width: 100%;
    // flex-direction: column;
    // flex-wrap: wrap;
}
& .MuiTypography-root {
    width: 80vw;
    height: 100%;
}
`
// export const AsideBox = styled.aside`
// width: 25%;
// `
// export const PostsBox = styled.article`
// width: 75%;
// `