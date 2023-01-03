import styled from "styled-components";

const StyledList = styled.ul `
    width: 90%;
    height: 360px;

    margin: 10px auto;

    overflow-x: auto;

    display: flex;
    align-items: center;
    gap: 20px;

    @media all and (min-width: 1024px) {
        width: 100%;
        max-width: 940px;
        height: 735px;

        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export default StyledList