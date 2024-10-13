import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-width: 25em;

    .a {
        position: absolute;
        top: 25px;
        left: 25px;
        width: 395px;
        height: 495px;
        border: 2px solid rgba(224, 43, 32, 1);
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    img {
        position: relative;
        border: 5px solid rgba(100, 100, 100, 1);
    }
`;
