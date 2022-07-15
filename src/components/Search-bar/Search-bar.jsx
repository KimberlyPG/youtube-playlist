import { FC } from "react";
import { Form, SearchInput } from "./search-bar-styles";
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ handleSubmit, handleChange}) => {
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