import { Form, SearchInput, Icon } from "./search-bar-styles";
import { BsSearch } from 'react-icons/bs';
import searchicon from '../../assets/searchicon.png'

const SearchBar = ({ handleSubmit, handleChange}) => {
    return (
            <Form onSubmit={handleSubmit}>
                <SearchInput 
                    type="search" 
                    onChange={handleChange}
                />
                <button type="submit">
                    <BsSearch color= 'white' />
                    {/* <Icon src={searchicon} alt="searchbar icon" /> */}
                </button>
            </Form>
    )
}

export default SearchBar;