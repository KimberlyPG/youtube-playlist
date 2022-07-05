import styled from 'styled-components'
import searchicon from '../../assets/searchicon.png'

export const SearchBarContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex; 
    justify-content: center;
    height: 80px;

    button {
        height: 100%;
        background: #909090;
        border: none;
        background-image: url(${searchicon})
    }

    img {
        background: #909090;
        height: 100%;
    }
`;

export const Form = styled.form`
    padding: 0 0 0 0;
    margin: 0;
`
export const SearchInput = styled.input`
    -webkit-appearance: none;
    border: none;
    outline: none;
    padding: 10px
    width: 600px;
    line-height: 100%;
    height: 100%;
    margin: auto 0;
    // margin-left:50%;
    // transform: translateX(-50%);
`;

export const Icon = styled.img`
    background: #909090;
    // padding-top: 5px;
`;

