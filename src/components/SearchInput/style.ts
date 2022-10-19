import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Wrapper = styled.div`
  width: 100%;
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;
  }
`;

export const TextFieldCustom = styled(TextField)`
  margin-right: 15px !important;
`;
export const ErrorMessage = styled.span`
  color: red;
`;
