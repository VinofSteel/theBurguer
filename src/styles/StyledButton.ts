import styled from "styled-components";

interface iStyledButton {
    width: string,
    height: string,
}

export const StyledButton = styled.button<iStyledButton> `
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--color-primary);
    padding: 0 20px;
    border: 2px solid var(--color-primary);
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: white;

    transition: 0.3s;

    cursor: pointer;

    :hover {
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    } 
`