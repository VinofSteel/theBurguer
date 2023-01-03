import styled from "styled-components";

const StyledLogo = styled.div `
    display: flex;
    gap: 5px;
    margin-top: 15px;

    h1 {
        font-weight: 700;
        font-size: 1.7rem;
        color: var(--color-gray-100)
    }

    h2 {
        font-weight: 700;
        font-size: 1rem;
        color: var(--color-secondary);
        margin-top: 10px;
    }

    @media all and (min-width: 768px) {
        margin-top: 5px;
    }
`

export default StyledLogo