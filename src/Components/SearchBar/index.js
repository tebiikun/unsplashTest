import "./style.css";
const SearchBar = (props) => {

    const {
        nuevaCall
    } = props;
    return (
        <div className="searchbar-container">
            <input type="text" className="search-input" placeholder="Buscar ..." />
            <button className="btn classic" onClick={nuevaCall}>Search</button>
        </div>
    )
}

export default SearchBar;