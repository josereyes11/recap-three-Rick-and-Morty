const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const urlRM = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  //?page= + let page
  const response = await fetch(`${urlRM}?page=${page}&name=${searchQuery}`);
  const data = await response.json();

  // update page and MaxPage const for let. Then reasign maxPage value for:
  maxPage = data.info.pages;

  //Update content for pagination with .textContent plus a literal template
  pagination.textContent = `${page} / ${maxPage}`;

  //cardContainer is emptied every time new characters are fetched
  cardContainer.innerHTML = "";

  //calling the function createCharacterCard function and its return value is appended to the cardContaoner
  data.results.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });
}

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
});

// Add an event listener to searchBar.
// Prevent default behaviour.
// Take formData and data variables from handle-form-submit file.
// Reassign searchQuery with data.query (input name).
// Reset page to 1 and call fetchCharacters.
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  page = 1;
  fetchCharacters();
});

fetchCharacters();

import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";

// This text is for testing a deployment
