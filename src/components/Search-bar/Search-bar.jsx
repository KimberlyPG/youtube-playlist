import { SearchBarContainer, SearchInput, Icon, Button } from "./search-bar-styles";
import searchicon from '../../assets/searchicon.png'

const SearchBar = ({ handleSubmit, handleChange}) => {
    return (
        <SearchBarContainer>
            <form onSubmit={handleSubmit}>
                <SearchInput 
                    type="search" 
                    onChange={handleChange}
                />
                <button type="submit">
                    image: {background}
                    {/* <img src={searchicon} alt="searchbar icon" /> */}
                </button>
            </form>
            {/* <img src={searchicon} alt="searchbar icon" /> */}
        </SearchBarContainer>
    )
}

export default SearchBar;