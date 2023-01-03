import styled from "styled-components";

const StyledTotal = styled.section `
    width: 90%;
    height: 104px;

    margin: 0 auto;

    animation: appear 0.8s;

    div {
        width: 100%;
        height: 45px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div h3 {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-gray-100);
    }

    div span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-gray-50);
    }

    button {
        width: 100%;
        height: 60px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-gray-20);
        padding: 0 20px;
        border: 2px solid var(--color-gray-20);
        border-radius: 8px;

        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: var(--color-gray-50);

        transition: 0.3s;

        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-gray-50);
        border: 2px solid var(--color-gray-50);
        color: var(--color-gray-20);
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`

export default StyledTotal