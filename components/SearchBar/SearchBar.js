// Add an event listener to searchBar.
// Prevent default behaviour.
// Take formData and data variables from handle-form-submit file.
// Reassign searchQuery with data.query (input name).
// Reset page to 1 and call fetchCharacters.
/*
export searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  page = 1;
  fetchCharacters();
});
*/

export function SearchBar(props) {
  const searchBar = document.createElement("form");
  searchBar.classList.add("search-bar");
  searchBar.innerHTML = `
  <input
    name="query"
    class="search-bar__input"
    type="text"
    placeholder="search characters"
    aria-label="character name"
  />
  <button class="search-bar__button" aria-label="search for character">
    <img class="search-bar__icon" src="assets/magnifying-glass.png" alt="" />
  </button>
  `;
  searchBar.addEventListener("submit", props.onSubmit);
  return searchBar;
}
