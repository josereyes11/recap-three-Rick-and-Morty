import { createCharacterCard } from "./components/CharacterCard/CharacterCard.js";
import { NavButton } from "./components/NavButton/NavButton.js";
import { NavPagination } from "./components/NavPagination/NavPagination.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const navigation = document.querySelector('[data-js="navigation"]');

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

// prevButton.addEventListener("click",
function handlePrevClick() {
  if (page > 1) {
    page--;
    fetchCharacters();
  }
}

// nextButton.addEventListener("click",
function handleNextClick() {
  if (page < maxPage) {
    page++;
    fetchCharacters();
  }
}

function handleSearchSumit(event) {
  event.preventDefault();
  const formData = new FormData(searchBar);
  const data = Object.fromEntries(formData);
  searchQuery = data.query;
  page = 1;
  fetchCharacters();
}

const pagination = NavPagination();
const prevButton = NavButton({
  label: "previous",
  modifier: "button--prev",
  onClick: handlePrevClik,
});

const nextButton = NavButton({
  label: "next",
  modifier: "button--next",
  onClick: handleNextClick,
});

const searchBar = SearchBar({
  onSubmit: handleSearchSumit,
});

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

fetchCharacters();
