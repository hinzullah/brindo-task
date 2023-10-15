import styled from "styled-components";

export const Footer =styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .footer2{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-shrink: 0;
        img{
            display: flex;
            flex-shrink: 0;
            width: 80px;
            height: 24px;
        }
    }
`