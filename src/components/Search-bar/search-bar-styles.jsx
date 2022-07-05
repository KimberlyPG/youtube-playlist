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
    // background-color: #37474f;

    button {
        height: 100%;
        // background: #909090;
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
    // margin-left:50%;
    // transform: translateX(-50%);
`;

export const Icon = styled.img`
    // background: #909090;
    height: 50%;
    width: 100%;
`;

