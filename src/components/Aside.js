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
        margin: 0 3rem;
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
        margin-top: 4rem;
        .feature-text{
            display: flex;
            flex-direction: column;
            padding-left: 4rem;
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
            flex-shrink: 0;
            margin-right :4rem;
            img{
                width: 332px;
                height: 500px;
            }
        }
    }
    .participate{
        background-color: rgba(239, 239, 239, 1);
        display: flex;
        flex-direction: column;
        height: 172px;
        margin: 1rem auto;
        padding: 0 20px;
        color: black;
        border-radius: 40px;
        width: 1180px;
        .button{
            button{
            width: 280px;
            height: 62px;
            margin-left: 12px;
            border-radius: 10px;
            border: 1px solid white;
            background-color : white;
            font-weight: 600;
        }
    .black{
            border: 1px solid black;
            background-color : black;
            color: white;
        }
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
        justify-content: space-around;
        border-radius: 40px;
        margin: 0 auto;
        width: 1144px;
        height: 156px;
        padding: 0;
        .join{
            width: 116px;
            height: 40px;
        }
        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-shrink: 0;
            gap: 10px;
            font-weight: 600px;
            img{
                width: 24px;
                height: 24px;
            }
        }
    }
    @media screen and (max-width:700px) {
        .summary{
        padding: 2rem;
    }
    .parallax{
        justify-content: space-between;
        align-items: center;
        padding-right:0.1rem ;
        .parallax-text{
            padding: 1.5rem;
            width: 320px;
            margin: auto 0.1rem;
            h2{
                width: 420px;
                height: 128px;
            }
            p{
                width: 360px;
                height: 192px;
            }
        }
        .parallax-image{
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
            padding: 1.5rem;
            width: 250px;
            h2{
                width: 344px;
            }
            p{
                width: 344px; 
            }   
        }
    }
    .participate{
        padding: 0 0.2rem;
        height: 152px;
        margin: 1rem;;
        button{
        width: 8rem;
        height: 2rem;
        
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
        padding: 0;
        margin: 1rem;
        div{
            gap: 3px;
            margin: 7px;
            img{
                width: 24px;
                height: 24px;
            }
        }}
    }
`