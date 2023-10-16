import styled from "styled-components";

export const Hero = styled.div`
@media screen and (min-width: 1020px) and (max-width: 1700px) {
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
            .box-right1{
                width: 132px;
                height: 132px;
                margin-top: 1rem;
            }
            .box-right2{
                width: 264px;
                height: 264px;
                margin:0 3rem;
            }
        }
    
}


}

`