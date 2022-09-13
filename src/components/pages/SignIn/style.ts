import React from 'react';
import styled from 'styled-components';
import TextField from '../../TextField';
import { Button } from "@mui/material";


export const Wrapper = styled.article`
width: 100%;
min-height: 90vh;
display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: 'Josefin Sans',sans-serif;

 `

 export const FormWrapper = styled.div`
 display: flex;
    width: 40vh;
    height: 40vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    margin-top: 15%;
    padding: 5%;
    border-radius: 10px;
	overflow: hidden;
	position: relative;
    font-family: 'Josefin Sans',sans-serif;
    ::before {
        content: '';
        position: absolute;
        z-index: -2;
        left: -50%;
        top: -50%;
        width: 200%;
        height: 200%;
        background-color: #BFE2FF;
        background-repeat: no-repeat;
        background-size: 50% 50%, 50% 50%;
        background-position: 0 0, 100% 0, 100% 100%, 0 100%;
        background-image: linear-gradient(#c395da,#c590da),linear-gradient(#d13eec,#7db8eb),linear-gradient(#c395da,#c395da),linear-gradient(#d13eec,#7db8eb);
        animation: anim-ramka-5 8s linear infinite;
    }
    ::after {
        content: '';
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
 `
 export const Title = styled.h3`
 font-size: 1.5em;
background: linear-gradient(to right,#f38cff,#e76df6 50%,#eee 75%,#5668ed 75%);background-size: 200% auto;
color: #000;
background-clip: text;
animation: animate 5s linear infinite;
text-fill-color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin: 0 auto;
@keyframes animate {
  to {
      background-position: 200% center;
  }
}
`
 export const Navigate = styled.div`
 display: flex;
    flex-direction: row;
    justify-content: flex-start;
 `

 export const ErrorText = styled.p`
 margin: 0;
 color: red;
 display: flex;
 justify-content: center;
 align-items: center;
 `
 export const NavigateForward = styled.div`
 display: flex;
    flex-direction: row;
    justify-content: flex-end;
 `
 export const TextFieldCustom = styled(TextField)`
 input{
    font-size: 1.3em;
    font-family: 'Josefin Sans',sans-serif;
 }

 `
 export const ButtonMaterialCustom = styled(Button)`
 height: 4vh;
p{
    margin: 0.5em 0.5em;
    font-size: 1em;
    font-family: 'Josefin Sans',sans-serif;
}
    
 
 `