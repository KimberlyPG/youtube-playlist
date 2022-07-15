import styled from 'styled-components'

export const Form = styled.form`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex; 
    justify-content: center;
    height: 3rem;
    position: relative;
    align-items: center;
    justify-content: center;

    button {
        height: 100%;
        background: #d3d3d3;
        border: none;
    }
`;

export const SearchInput = styled.input`
    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px
    line-height: 100%;
    height: 100%;
    margin: auto 0;
    width: 600px;
    background: #F8F9F9
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 2px #eee;
    border: 1px solid #ccc;
    font-size: 18px;
    font-family: Arial;
    color: #606060;

    @media (max-width: 450px) {
        & {
          width: 80%;
        }
      }
`;
