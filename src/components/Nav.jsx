import SearchBar from "./SearchBar";


export default function Nav(props){
    const { onSearch } = props;
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    );
}