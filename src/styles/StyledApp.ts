import styled from "styled-components"

const StyledApp = styled.div`
    width: 100vw;

    margin: 0 auto;

    overflow-x: visible;

    background-color: white;


    .header {
        height: 140px;
        width: 100%;
        background-color: var(--color-gray-0);
    }

    @media all and (min-width: 768px) {
        .header {
            height: 80px;
        }
    }

    @media all and (min-width: 1024px) {
        width: 100vw;

        main {
            width: 90%;

            margin: 0 auto;

            display: flex;
        }
    }
`

export default StyledApp