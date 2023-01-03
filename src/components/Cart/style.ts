import styled from "styled-components";

const StyledCart = styled.section `
    width: 90%;
    min-height: 223px;
    max-height: 535px;

    margin: 20px auto;

    display: flex;
    flex-direction: column;

    .title {
        width: 100%;
        height: 65px;

        display: flex;
        align-items: center;

        background-color: var(--color-primary);
        border-radius: 5px 5px 0px 0px;
    }

    .title h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: white;
        margin-left: 20px;
    }

    ul {
        min-height: 158px;
        max-height: 400px;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        
        overflow-y: auto;
    }

    ul div {
        height: 50px;

        margin-top: 10vh;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        
    }

    ul div h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-gray-100);
    }

    ul div span {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-gray-50);
    }

    @media all and (min-width: 1024px) {
        width: 365px;
    }
`

export default StyledCart