import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    


    .content{
        display: flex;
        
        justify-content: space-between;
        width: 60%;
        padding: 64px 0px;

        @media(max-width: 980px){
            flex-wrap: wrap-reverse;

            .Logo {
                margin-right: auto;
                margin-left: auto;
            }
            .event{
                margin-top:45px;
            }
            .socialMedias{
                margin-top:45px;
            }
        }

        .event {
            display:flex;
            flex-direction: column;
            width: 15%;
            /*background-color: red;*/
            min-width:150px;


            /*background-color: blue;*/
        }

        .socialMedias {
            display:flex;
            flex-direction: column;
            width: 15%;
            min-width:150px;
            

            /*background-color: green;*/
        }

        .Logo {
            /*background-color: red;*/
            width: 30%;
            min-width:290px;
            
            .logoImg {
                width: 100%;
                height: auto;
            }
        }
    }
`;

export const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;

    p {
        color: white;
        padding: 40px;
    }
`;
