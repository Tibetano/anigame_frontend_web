import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    min-width: 25em;

    .a {
        position: absolute;
        top: 25px;
        left: 55px;
        width: 395px;
        height: 495px;
        border: 2px solid rgba(224, 43, 32, 1);
        display: flex;
        align-items: flex-end;

        p{
            margin: 0px 0px 35px 55px;
        }
    }

    img {
        position: relative;
        margin-left: 115px;
        border: 5px solid rgba(100, 100, 100, 1);
    }
`;
