import styled from "styled-components";

const StyledCartCard = styled.li `
    height: 80px;
    width: 95%;
    
    display: flex;
    align-items: center;
    gap: 10px;

    transition: 0.4s;

    animation: appear 0.8s;

    figure {
        height: 70px;
        width: 70px;

        background-color: var(--color-gray-20);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    figure img {
        height: 70px;
        width: 70px;
        object-fit: contain;
    }

    .text {
        margin-top: 0;
        height: 100%;
        width: 115px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .text h3 {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--color-gray-100);
    }

    .text h4 {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--color-gray-50);
    }

    .buttons {
        width: 80px;

        height: 100%;
        margin-top: 0;
        margin-left: auto;

        display: flex;
        align-items: center;
        gap: 5px;
    }

    .buttons .buttons__add {
        width: 80%;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        border-radius: 4px;
        
        font-weight: 600;
        font-size: 14px;
        color: white;

        padding: 0 20px;

        transition: 0.3s;

        cursor: pointer;
    }

    .buttons .buttons__add:hover {
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }

    .buttons .buttons__remove {
        width: 80%;

        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: var(--color-negative);
        border: 2px solid var(--color-negative);
        border-radius: 4px;
        
        font-weight: 600;
        font-size: 14px;
        color: white;

        padding: 0 20px;

        transition: 0.3s;

        cursor: pointer;
    }

    .buttons .buttons__remove:hover {
        background-color: var(--color-secondary);
        border: 2px solid var(--color-secondary);
    }

    .buttons p {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--color-gray-50);
        width: fit-content;
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

export default StyledCartCard