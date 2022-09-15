import styled from 'styled-components'

export const InputsPassWrapper = styled.div`
    width: 90%;
    min-height: 8vh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;

    .MuiFormControl-root{
        width: 100%
    }
`

export const ErrorsMessage = styled.span`
    color: red;
    font-size: 0.9em;
    margin: 1% 6%;
`