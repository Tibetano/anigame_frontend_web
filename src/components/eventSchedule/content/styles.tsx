import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0px 224px 0px 224px;

    @media(max-width: 1040px){
        flex-direction: column;
    }

    .left_ilustration{
        padding: 40px 40px 80px 224px;
        width: 50%;

        @media(max-width: 1040px){
            display: flex;
            justify-content: center;
            padding: 40px 0px 90px 0px;
            width: 700px;
        }

        @media(max-width: 700px){
            display: flex;
            justify-content: center;
            padding: 40px 0px 90px 0px;
            width: 100%;
        }
    }

    .left_description{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 40px 224px 0px 40px;

        @media(max-width: 1040px){
            padding: 40px 40px 0px 40px;
            width: 100%;
        }

        .left_button{
            margin: 40px 0px 40px 0px;
        }
    }



    .right_ilustration{
        padding: 40px 224px 80px 0px;
        width: 50%;

        @media(max-width: 1040px){
            display: flex;
            justify-content: center;
            padding: 40px 0px 200px 0px;
            width: 700px;
        }

        @media(max-width: 700px){
            display: flex;
            justify-content: center;
            padding: 40px 0px 90px 0px;
            width: 100%;
        }
    }

    .right_description{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 40px 40px 0px 224px;

        @media(max-width: 1040px){
            padding: 40px 40px 0px 40px;
            width: 100%;
        }

        .right_button{
            margin: 40px 0px 40px 0px;
        }
    }
`;
