import styled from "styled-components";

export const Container = styled.div`

.openM{
  background-color: black;
  color: yellow;
  margin-bottom: 14px;
  border: yellow  solid 2px;
  padding: 1px;
  border-radius: 1.5px;
  transition: 0.3s;
}
.openM:hover{
  transform: scale(1.1);
  
}



`

export const Modals = styled.div`



.close{
    float: right;
   display: flex;
   background-color: black;
   border: none;
   h1{
color: white;
transition: 0.3s;
}
h1:hover{
  transform: scale(1.1);
  color: gray;
}
}

.tip{
  align-items: center;
 justify-content: center;
 text-align: center;


   h1{
    padding-top: 20px;
    }
   hr{
    margin: 10px 0;
   }
}


`