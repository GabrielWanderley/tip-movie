import styled from "styled-components";

export const Container = styled.div`

.openM{
  background: #fff;
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-size: 15px;
  font-weight: 600;
  width: 120px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);
  margin-bottom: 15px;

}
span {
  display: inline-block;
  transform: skew(21deg);
}
.openM::before{
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  left: 0;
  background: yellow;
  opacity: 0;
  z-index: -1;
  transition: all 0.5s;
}
.openM:hover{
  color:  black;
;

}
.openM:hover::before {
  left: 0;
  right: 0;
  opacity: 1;

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
cursor: pointer;

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
    margin: 10px;
    height: 2px; 
    background-color: yellow;
    border-color: yellow;
   }
}

select{
  background-color: black;
  color: white;
  border-radius: 10px;
  width: 150px;
  height: 30px;
  font-size: 20px;

}


`

export const ContainerTip = styled.div`

.carro{
  align-items: center;
  max-width: 600px;

}

img{
  width:150px;
  margin-left: 165px;
  margin-top: 15px;
  margin-bottom: 15px;
  transition: all 0.3s;
}

img:hover{
   transform: scale(1.1);
}

.card{
  align-items: center;
  text-align:center;
}

`
