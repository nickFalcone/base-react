import { useState } from "react";

const GithubSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.items);
      });
    setSearchTerm("");
  };

  return (
    <div>
      <h2>Github Search</h2>
      <p>Simple query for Github repositories</p>
      <form onSubmit={handleSubmit}>
        <label>
          Search Repos:&nbsp;
          <input type="text" onChange={handleChange} value={searchTerm} />
          &nbsp;
        </label>
        <input
          type="submit"
          value="Submit"
          disabled={searchTerm.length === 0}
        />
      </form>
      <ul>
        {searchResults.map((result) => {
          return (
            <li key={result.id}>
              <a href={result.html_url}>{result.name}</a>
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
};

export default GithubSearch;
