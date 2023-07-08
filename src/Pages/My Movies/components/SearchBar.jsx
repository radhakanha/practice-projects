function SearchBar({ searchText, onSearch }) {
  return (
    <div className="w-1/2">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchText}
        onChange={(e) => onSearch(e.target.value)}
        className="h-10 w-full p-4 bg-violet-500 rounded-lg outline-none placeholder:text-zinc-300 text-lg "
      ></input>
    </div>
  );
}

export default SearchBar;
