import styled from 'styled-components'

const Header= styled.div`
margin:0;
display: flex;
flex-direction: row;
justify-content: space-between;
img{
    width: 240px;
    height: 100px;
}
ul{
    display: flex;
    flex-direction: row;

    margin: 3rem 0;
    li{
        margin-right: 4rem;
    }
}
button{
    width: 5rem;
    height: 2rem;
    margin: 3rem 2rem;
    border-radius: 10px;
    border: 1px solid rgba(245, 232, 118, 1);
    background-color:rgba(245, 232, 118, 1);
}
@media only screen 
and (max-width: 600px)
 { 
    ul{
        gap: 1rem;
        padding: 0 2rem;
        margin: 3rem 1rem;
        font-size: 20px;
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