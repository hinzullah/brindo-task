import styled from "styled-components";

export const Hero = styled.div`
padding: 2rem;
box-sizing: border-box;
margin: 0 auto;
.box-left{
    margin-top: -4rem;
    margin-left: 6rem;
    width: 96px;
    height: 96px;
}
.center-hero{
    display: flex;
    flex-direction: row;
    justify-content: center;
    .text-box{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;
        h2{
            font-size: 40px;
            font-weight: 600;
            line-height: 55px;
            height: 60px;
            width: 670px;
        }
        p{
            width: 408px;
            height: 48px;
            line-height: 24px;
            color: rgba(150, 150, 150, 1);
        }
        button{
            width: 124px;
            height: 56px;
            border-radius: 10px;
            border: 1px solid white ;
            background-color: white;
            font-weight: 600;
        }
    }
    .gray-box{
            display: flex;
            flex-direction: column;
            margin-top: 4rem;
            .box-left1{
                width: 164px;
                height: 164px;
                margin-left: -3rem; 
            }
            .box-left2{
                width: 196px;
                height: 196px;
                margin: 3rem 0  0 3rem;
            }
        }
        .white-box{
            display: flex;
            flex-direction: column;
            
            .box-right1{
                width: 132px;
                height: 132px;
                margin-top: -1rem;
                
            }
            .box-right2{
                width: 254px;
                height: 254px;
            }
        }
    
}

@media screen and (max-width:700px) {
    .center-hero{
    flex-direction: column;
    .text-box{
        flex-direction: column; 
    }
    .gray-box{
            flex-direction: row;
            align-items: center;
            margin: 0 auto;
            .box-left2{
                margin-left: 1rem;
            }
        }
        .white-box{
            flex-direction: row;
            align-items: center;
            margin: 0 auto;
            .box-right1{
                margin-top: 1rem;
            }
            .box-right2{
                margin: 3rem;
            }
        }
    }
}
@media screen and (min-width:900px) and (max-width:1700px) {
    .center-hero{
    flex-direction: row;
    .text-box{
        flex-direction: column;
        h2{
            width: 570px;
        }
    }
    .gray-box{
            flex-direction: column;
            padding-left: 0;
            .box-left2{
                margin-left: 0;
            }
        }
        .white-box{
            flex-direction: column;
            padding-right: 0;
            .box-right1{
                margin: 0;
            }
            .box-right2{
                margin: 0;
            }
        }
    }
}


`