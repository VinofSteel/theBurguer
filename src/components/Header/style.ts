import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    height: 140px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media all and (min-width: 768px) {
        width: 90%;
        height: 80px;

        margin:0 auto;

        flex-direction: row;
        justify-content: space-between;
    }
`

export default StyledHeader