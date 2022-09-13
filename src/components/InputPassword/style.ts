import styled from 'styled-components'

export const InputsPassWrapper = styled.div`
    width: 90%;
    min-height: 8vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .MuiFormControl-root{
        width: 100%
    }
   
`
export const ErrorsMessage = styled.span`
    color: red;
    font-size: 1em;
    margin: 1% 6%;
`