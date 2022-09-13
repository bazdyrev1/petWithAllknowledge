import styled from "styled-components";
import { Box } from "@mui/material";

export const Wrapper = styled.div`
  width: 15vh;
  height: 8vh;
  overflow: hidden;
  margin: 0 auto;
`;

export const CustomBox = styled(Box)`
  transform: "translate(-50%, -50%)";
  min-width: 300px;
  width: auto;
  min-height: 240px;
  height: auto;
  overflow: hidden;
  img {
    object-fit: cover;
    min-width: 360px;
    max-width: 70vw;
    min-height: 320px;
    max-height: 800px;
  }
`;
