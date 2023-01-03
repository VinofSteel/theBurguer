import styled from "styled-components";

const StyledSearchBar = styled.form`
    display: flex;

    align-items: center;
    justify-content: space-around;

    width: 90%;
    max-width: 365px;
    height: 60px;
    border: 2px solid var(--color-gray-20);
    border-radius: 8px;

    margin-top: 14px;

    :focus-within {
        border: 2px solid var(--color-gray-100);
    }

    input {
        width: 100%;
        height: 100%;

        background-color: white;
        border: none;
        border-radius: 8px;
        padding: 0px 10px 0px 20px;

        font-weight: 400;
        font-size: 16px;
        line-height: 19px

    }

    input:focus {
        outline: none;
    }

    input::placeholder {
        color: var(--color-gray-20);
        opacity: 1; /* Firefox */
    }

    input:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-gray-20);
    }

    input::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-gray-20);
    }

    input:focus::placeholder {
        color: var(--color-gray-100);
        opacity: 1; /* Firefox */
    }

    input:focus:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: var(--color-gray-100);
    }

    input:focus::-ms-input-placeholder { /* Microsoft Edge */
        color: var(--color-gray-100);
    }

    @media all and (min-width: 768px) {
        margin-top: 5px;
    }
`

export default StyledSearchBar