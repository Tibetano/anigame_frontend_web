import styled from "styled-components";

const StyledSponsor = styled.div`
    color: white;
    padding: 15px;
    margin: 20px;
    
    .sponsor-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        /*padding: 5px;*/

        .sponsorLogo {
            border: 4px solid rgba(51, 51, 51, 1);
            background-color: black;
            width: 144px;
            height: 144px;
            z-index: 2;
        }

        .sponsorRole {
            padding: 2px;
            background-color: black;
        }

        .sponsorName {
            font-size: 20px;
            text-align: center;
            padding: 2px;
            background-color: black;
        }
    }
    
    .border-container{
        position: absolute;
        top: 80px;
        left: -10px;
        width: 164px;
        height: 152px;
        border: 2px solid rgba(170, 230, 17, 1);
        box-sizing: border-box;
        z-index: 1;
    }
   
`;

export default StyledSponsor;