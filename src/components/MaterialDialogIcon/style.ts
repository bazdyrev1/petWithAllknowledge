import React from "react";
import styled from 'styled-components';

export const Wrapper = styled.div`

`
export const ImageBlock = styled.div`
position: absolute;
top: 25%;
left: 25%;
min-width: 600px;
max-width: 1200px;
min-height: 400px;
max-height: 1200px;
overflow: hidden;
transform: "translate(-50%, -50%)";
  justify-content: center;
  border: "2px solid #000",
& img {
    bac
    object-fit: cover;
    min-width: 600px;
    min-height: 400px;
}
`