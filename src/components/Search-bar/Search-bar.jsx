import { useNavigate } from "react-router-dom";

import { Form, SearchInput, Icon } from "./search-bar-styles";
import { BsSearch } from 'react-icons/bs';
import { useEffect } from "react";

const SearchBar = ({ handleSubmit, handleChange }) => {

    const history = useNavigate();
    console.log("history", !!handleSubmit);

    // useEffect(() => {
    //     if(isWatch){
    //         history('/');
    //     }
    // },{isWatch})

    return (
            <Form onSubmit={handleSubmit}>
                <SearchInput 
                    type="search" 
                    onChange={handleChange}
                />
                <button type="submit">
                    <BsSearch color= '#f8f8f8' />
                </button>
            </Form>
    )
}

export default SearchBar;