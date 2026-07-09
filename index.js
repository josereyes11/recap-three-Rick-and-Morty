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
const searchQuery = "";

const urlRM = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  //?page= + let page
  const response = await fetch(`${urlRM}?page=${page}`);
  const data = await response.json();

  maxPage = data.info.pages;
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

fetchCharacters();

import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
