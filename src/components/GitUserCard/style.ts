import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoBlock = styled.div`
  display: flex;
  width: 70%;
  height: 5vh;
  border-bottom: 1px solid gray;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryItem = styled.div`
  width: 30%;
  border-right: 1px solid gray;
`;

export const DataItem = styled.div``;

export const TableText = styled.p``;

export const ErrorMessage = styled.p`
color: red;`