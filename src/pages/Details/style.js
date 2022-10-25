import styled from "styled-components";

export const Container = styled.div`
position: relative;
padding: 4rem 0;

 h1{
    margin: 3rem 0;
 }
 .movie{
    position: absolute;
    max-width: 1000px;
    top: 20%;
    left: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
 }
 img{
    width: 300px;
    border-radius: 1rem;
 }
 .details{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    min-width: 50%;
 }
 button{
    background-color:#6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: 0.3s;
 }
 button:hover{
    background: #5848c2;
 }
 span{
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
    }
    .release-date{
        opacity: 0.5;
    }
`