import styled from "styled-components";

interface ButtonProps {
  readonly isActive: boolean;
}
export const Wrapper = styled.div`
  margin-top: 25px;
`
export const RgbButton = styled.button<ButtonProps>`
  margin          : 0 20px;
  background-color: ${props => props.isActive ? 'yellow' : 'white'};
`