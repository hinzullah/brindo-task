import styled from 'styled-components'

const Header= styled.div`
margin : 2rem;
display: flex;
flex-direction: row;
justify-content: space-between;
img{
    width: 15.625rem;
    height: 6.25rem;
}
ul{
    display: flex;
    flex-direction: row;
    width: 18.125rem;
    height: 20px;
    margin: 3rem 0;
    li{
        margin-right: 4rem;
    }
}
button{
    width: 7.625rem;
    height: 2.875rem;
    margin: 2rem;
    border-radius: 10px;
    border: 1px solid rgba(245, 232, 118, 1);
    background-color:rgba(245, 232, 118, 1);
    font-weight: 600;
}
@media only screen 
and (max-width: 600px)
 { 
    ul{
        gap: 1rem;
        padding: 0 2rem;
        margin: 3rem 1rem;
        font-size: 1.25rem;
        li{
            margin-right: 1rem;
        } 
    }
    button{
    margin-right: 1rem;
}
  }
`

export default Header