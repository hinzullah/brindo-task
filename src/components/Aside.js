import styled from "styled-components";

export const Aside = styled.div`
padding-top: 3rem;
    .summary{
        display: flex;
        flex-direction: column;
        padding: 4rem;
        width: 600px;
    }
    .train{
        img{
            width: 100%;
        }
    }
    .parallax{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .parallax-text{
            padding: 3rem;
            width: 413px;
            margin: auto 0;
        }
        .parallax-image{
            padding: 0;
            img{
                width: 360px;
            }
        }
    }
    .feature{
        display :flex ;
        flex-direction: row;
        justify-content: space-between;
        .feature-text{
            display: flex;
            flex-direction: column;
            padding: 3rem;
            width: 300px;
                button{
                    width: 5rem;
                    height: 2rem;
                    margin: 3rem 2rem;
                    border-radius: 10px;
                    border: 1px solid rgba(245, 232, 118, 1);
                    background-color:rgba(245, 232, 118, 1);
                    }
            
        }
        .feature-image{
            display: flex;
            flex-direction: row;
        }
    }
    .participate{
        background-color: rgba(239, 239, 239, 1);
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        margin: 0 1rem 2rem 1rem;
        color: black;
        border-radius: 30px;
        button{
        width: 12rem;
        height: 2.4rem;
        margin: 0 1rem 1rem 1rem;
        border-radius: 10px;
        border: 1px solid white;
        background-color : white;
    }
    .black{
            border: 1px solid black;
            background-color : black;
            color: white;
        }
    }
    .roadmap{
        display: flex;
        flex-shrink: 0;
        padding: 0;
        img{
            width: 100%;
        }
    }
    .community{
        display: flex;
        flex-direction: row;
        background-color: white;
        color: black;
        justify-content: space-between;
        padding: 0 1rem;
        margin: 2rem;
        border-radius: 20px;
        div{
            display: flex;
            flex-direction: row;
            flex-shrink: 0;
            gap: 3px;
            text-align:center;
            margin: 10px;
            img{
                width: 24px;
                height: 24px;
                padding-top: 7px;
            }
        }
    }
`