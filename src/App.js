import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import SearchResult from "./components/SearchResult";

function App() {

  const [results, setResult] = useState([]);

  return (
    <div className='ui container'>
      <SearchBar setResult={setResult}></SearchBar>
      <SearchResultList searchResult={results}></SearchResultList>
    </div>
  );
}

export default App;
