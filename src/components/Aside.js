import styled from "styled-components";

export const Aside = styled.div`
    .summary{
        display: flex;
        flex-direction: column;
        padding: 4rem;
        h2{
            font-size: 50px;
            font-weight: 500;
            line-height: 44px;
            letter-spacing: -0.05em;
        }
        p{
            color: rgba(150, 150, 150, 1);
            width: 706px;
            font-size: 20px;
        }
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
            h2{
                width: 513px;
                height: 128px;
                font-size: 46px;
                font-weight: 500;
                line-height: 54px;
                letter-spacing: -0.05em;
            }
            p{
                width: 400px;
                height: 192px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(150, 150, 150, 1);
            }
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
            h2{
                width: 444px;
                height: 54px;
                font-size: 46px;
                font-weight: 500;
                line-height: 54px;
            }
            p{
                width: 444px;
                height: 64px;
                font-size: 16px;
                font-weight: 400;
                color: rgba(150, 150, 150, 1); 
            }
                button{
                    width: 142px;
                    height: 56px;
                    margin: 3rem 0;
                    font-weight: 600;
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
        padding: 0 0.2rem;
        height: 152px;
        margin: 1rem;
        color: black;
        border-radius: 30px;
        button{
        width: 10rem;
        height: 2.4rem;
        margin: 0.2rem;
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
            font-weight: 600px;
            img{
                width: 24px;
                height: 24px;
                padding-top: 7px;
            }
        }
    }
`