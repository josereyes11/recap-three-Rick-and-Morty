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

/* - The component functions should be called `SearchBar` and should return the created elements. */

/* - HINT: It is challenging to get the event listener functions right for these components. Use an
  extra input parameter PROPS `onSubmit` in your components. */

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
