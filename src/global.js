import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "League spartan", sans-serif;
  
}
body {
  background-color: black;
  color: white;
  padding: 2rem;
}

.react-modal-overlay{
  background: rgba(255,255,255,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content{
  width: 90%;
  max-width: 500px;
  height: 500px;
  background-color: black;
  padding: 10px;
  border-radius: 5px;
  color: white;
}



`


