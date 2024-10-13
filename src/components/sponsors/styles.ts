import styled from "styled-components";

const StyledSponsors = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0px;
    background-color: black;
    
    .title {
        color: white;
        /*font-family: 'openSans', sans-serif;*/
        font-style: bold;
        font-size: 30px;
        line-height: 36px;
        padding-bottom: 32px;
    }

    .sponsorsList {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 60%;
        min-width: 430px;

        /*@media(max-width: 1480px){
            flex-wrap: wrap;
        }*/
    }
    

`;


/*
(max-width: ${size.sm})`

*/


export default StyledSponsors;