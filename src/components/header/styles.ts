import styled from "styled-components"
import breakpoints from "../../styles/breakpoints";

export const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;

    .icons {
            display: flex;
            justify-content: flex-end;
            width: 80%;

            @media ${breakpoints.bg}{
                justify-content: center;
                padding: 5px;
            }
            
            @media ${breakpoints.md}{
                display: none;
            }
    }

    .firstIcon {
        padding: 14px 0px 14px 16px;
    }

    .icon {
        padding: 14px 10px;
    }

    .lastIcon {
        padding: 14px 0px 14px 10px;
    }
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0px;

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        padding: 20px 0px;

        .Logo {
            width: 25%;
            background-color: red;
            
            .logoImg {
                width: 100%;
                height: auto;
            }
        }
    
        .NavBar {
            width: 50%;
            font-family: 'openSans', sans-serif;
            /*font-weight: 600;*/

            @media ${breakpoints.bg} {
                display: none;
            }

            .UList {
                display: flex;
                flex-wrap: wrap;
                font-size: 16px;
                line-height: 24px;
                color: #334155;

                li {
                    padding: 8px 12px;
                    transition: color 0.3s ease-in-out;

                    &:hover {
                        color: #64748b;
                    }
                }
            }
        }

        .btm{
            width: 16%;
            text-align: right;

            @media ${breakpoints.bg} {
                display: flex;
                justify-content: center;
                width: 100%;
                padding: 20px 0px 0px 0px;
            }
        }

        .menuBar { 
            display: none;
            font-size: 30px;
            padding: 5px;
            color: #334155;

            @media ${breakpoints.bg} {
                display: flex;
                justify-content: flex-end;
                width: 70%;
            }

            &:hover {
                        color: #64748b;
            }
        }
    }
`;
