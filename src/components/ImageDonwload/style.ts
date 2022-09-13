import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-top: 3px solid #e5a9f0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2vh;
`;
export const ControlButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0;
`;
export const UploadImageBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 0;
`;
export const ImageItem = styled.div`
  width: 40vh;
  height: auto;
  display: flex;
  padding: 1vh;
  background: #d3c5ea21;
  border-radius: 10px;
  margin: 1vh;

  background: aliceblue;
  border-radius: 10px;
`;
export const Image = styled.img`
  border-radius: 10px;
  width: 160px;
  height: 140px;
  object-fit: cover;
`;
export const ImageItemButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  button {
    margin: 0 5px;
  }
`;
export const Error = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #e26868;
`;
