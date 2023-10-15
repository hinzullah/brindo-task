import styled from "styled-components";

export const Hero = styled.div`
padding: 2rem;
box-sizing: border-box;
margin: 0 auto;
.box-left{
    margin-top: -3rem;
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
        button{
            width: 5rem;
            height: 2rem;
            margin: 3rem 2rem;
            border-radius: 10px;
            border: 1px solid white ;
            background-color: white;
        }
        .gray-box{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            .box-left1{
                width: 164px;
                height: 164px;
            }
            .box-left2{
                width: 196px;
                height: 196px;
                margin-left: 3rem;
            }
        }
        .white-box{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            .box-right1{
                width: 132px;
                height: 132px;
            }
            .box-right2{
                width: 164px;
                height: 164px;
                margin-right: 3rem;
            }
        }
    }
    
}


@media only screen 
and (max-width: 600px){
    padding: 1rem;
    .center-hero{
        padding-left: 0;
    .text-box{
        text-align: center;
        .gray-box{
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
            .box-left1{
                width: 164px;
                height: 164px;
            }
            .box-left2{
                width: 196px;
                height: 196px;
                margin-left: 0;
            }
        }
        .white-box{
            display: flex;
            flex-direction: column;
            padding: 0.1rem;
            .box-right2{
                width: 164px;
                height: 164px;
                margin-right: 0;
            }
        }
    }}
}
`