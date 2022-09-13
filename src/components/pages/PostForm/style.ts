import React from "react";
import styled from "styled-components";
import TextField from "../../TextField";

export const Wrapper = styled.article`
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
  display: flex;
  flex-direction: column;
`;
export const FormWrapper = styled.div`
  width: 90vh;
  height: auto;
  min-height: 65vh;
  padding: 2%;
  margin: 5% 0;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  ::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: #bfe2ff;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#c395da, #c590da),
      linear-gradient(#d13eec, #7db8eb), linear-gradient(#c395da, #c395da),
      linear-gradient(#d13eec, #7db8eb);
    animation: anim-ramka-5 8s linear infinite;
  }
  ::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 6px;
    top: 6px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    background: white;
    border-radius: 5px;
  }
  @keyframes anim-ramka-5 {
    100% {
      transform: rotate(1turn);
    }
  }
  fieldset {
    border-color: #b084d3;
  }
  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Title = styled.h3`
  font-size: 1.5em;
  background: linear-gradient(
    to right,
    #f38cff,
    #e76df6 50%,
    #eee 75%,
    #5668ed 75%
  );
  background-size: 200% auto;
  color: #000;
  background-clip: text;
  animation: animate 5s linear infinite;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1vh auto;
  @keyframes animate {
    to {
      background-position: 200% center;
    }
  }
`;
export const TitlePost = styled(TextField)`
  width: 100%;
  margin: 0 auto;
  height: 8vh;
`;
export const ArticlePost = styled(TextField)`
min-width:30%;
width: 48vh;
height: 38vh;

display: flex;
flex-direction: column;

div{
    height:100%;
}
textarea{
    height: 100%;
}
`;
export const WrapperTitleAndMainImage = styled.div`
width: 40vh;
margin-right: 2vh;
display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ErrorsMessage = styled.p`
  margin: 0;
`;
export const ButtonsWrapper = styled.div``;
