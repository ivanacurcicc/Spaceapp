import styled from 'styled-components'
import { Link } from "react-router-dom"

 export const StyledSearch = styled.input`
 padding-left:4px;
   color:#fcf9f9;
 width:300px;
 background:transparent;
 border:0.5px solid white;
 padding: 5px 30px;
 `

 export const StyledDivCont = styled.div`
   display: wrap ;
   justify-content: space-between;
   align-content: space-between;
   max-width:90%;
 `
 export const StyledDivItem = styled.div`
    border:0.5px solid #191f17;
    border-radius: 8px;
    display: inline-block;
    background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));
      width:100%;
     }
     p{
         color:#black;
         font-family: 'Times New Roman', Times, serif;
         text-align:left;
         padding-left: 4px;

     }
     details{
       font-weight:bold;
       font-family: 'Times New Roman', Times, serif;
       text-align:left;
       padding-left:10px;

     }
     img{
            //    width:320px;
            //    height:100px;
               border-radius:10px;
               padding-left:4px;
           }
 `
export const StyledLogin = styled.div`
margin-top:150px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
input{
  width:500px;
  padding:15px 30px;
  margin-top:8px;
  /* background: transparent; */
  border:1px solid white;
 
}
`
export const StyledLoginBtn = styled.input`
color: black;
font-size:1em;
background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));
:hover{
background:#3c3c3c;
color:white;
}
`
export const StyledLink = styled(Link)`
display:flex;
color: black;
font-size:3em;
margin-top:150px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
  margin: auto;
  width: 60%;
  border: 3px solid #black;
  padding: 10px;
  padding:15px 30px;
  margin-top:8px;
background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));
:hover{
background:#3c3c3c;
color:white;
}
`