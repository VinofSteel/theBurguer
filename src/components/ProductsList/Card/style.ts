import styled from "styled-components";

const StyledCard = styled.li `
    min-width: 300px;
    height: 346px;

    border: 2px solid var(--color-gray-20);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 0.4s;

    background-color: var();

    animation: appearLeft 0.8s;

    :focus-within {
        border: 2px solid var(--color-gray-100)
    }

    figure {
        height: 150px;
        width: 100%;
        background-color: var(--color-gray-0);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    figure img {
        width: 177px;
        height: 100%;
        object-fit: contain;
    }

    div {
        width: 262px;
        height: 70%;

        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    div h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-gray-100);
    }

    div h3 {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--color-gray-50);
    }

    div span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--color-primary);
    }

    div button:focus {
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }

    @keyframes appearLeft {
        0% {
            opacity: 0;
            transform: translateX(-30%);
        }

        100% {
            opacity: 1;
        }
    }

    @media all and (min-width: 1024px) {
        width: 30%;

        min-width: 100px;
        max-width: 300px;

        figure {
            min-width: 120px;
            max-width: 300px;
            height: 150px;
            background-color: var(--color-gray-0);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        figure img {
            min-width: 120px;
            max-width: 158px;
            height: 100%;
            object-fit: contain;
        }

        div {
            width: 70%;

            min-width: 200px;
            max-width: 262px;

            height: 70%;

            display: flex;
            flex-direction: column;
            gap: 25px;
        }
    }
`

export default StyledCard