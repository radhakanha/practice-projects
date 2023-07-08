import SearchBar from "./SearchBar";

function Header({ resultsCount = 0, searchText, onSearch }) {
  return (
    <div className="flex justify-between gap-4 items-center text-white rounded-lg px-8 py-4 min-h-16 mb-8 bg-violet-700">
      <div>
        <h1 className="text-3xl font-medium">🍿 My Movies</h1>
      </div>
      <SearchBar
        searchText={searchText}
        onSearch={onSearch}
      ></SearchBar>
      <p className="text-zinc-100 text-lg">
        Found <strong>{resultsCount}</strong> results
      </p>
    </div>
  );
}

export default Header;
