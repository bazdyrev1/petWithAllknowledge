import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const Wrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const FormWrapper = styled.div`
  display: flex;
  width: 40vh;
  height: auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  margin-top: 10%;
  padding: 5%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h3`
  font-size: 1.5em;
  margin: 0;
  margin-bottom: 2vh;
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
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @keyframes animate {
    to {
      background-position: 200% center;
    }
  }
`;

export const TextFieldCustom = styled(TextField)`
  width: 90%;
  min-height: 8vh;
  height: auto;
  margin-bottom: 20px !important;

  .MuiOutlinedInput-root {
    width: 100%;
  }

  .MuiFormControl-root {
    margin: 0 1vh;
  }
`;

export const MaterialButtonCustom = styled(Button)`
  width: 48%;
  min-height: 5vh;
  max-height: 6vh;
  border: none;
  p {
    margin: 0;
    font-size: 1em;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ErrorsMessage = styled.span`
  color: red;
  font-size: 1.2em;
  margin: 0% 3%;
`;
