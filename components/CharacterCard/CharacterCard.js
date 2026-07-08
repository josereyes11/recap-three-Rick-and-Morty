export function createCharacterCard(character) {
  /*  const name = character.name;
  const image = character.image;
  const status = character.status;
  const type = character.type;
  const episode = character.episode; */

  const { name, image, status, type, episode } = character;
  const li = document.createElement("li");
  li.classList.add("card");

  li.innerHTML = `
          <div class="card__image-container">
            <img
              class="card__image"
              src="${image}"
              alt=""
            />
            <div class="card__image-gradient"></div>
          </div>
          <div class="card__content">
            <h2 class="card__title">${name}</h2>
            <dl class="card__info">
              <dt class="card__info-title">Status</dt>
              <dd class="card__info-description">${status}</dd>
              <dt class="card__info-title">Type</dt>
              <dd class="card__info-description">${type}</dd>
              <dt class="card__info-title">Occurrences</dt>
              <dd class="card__info-description">${episode.length}</dd>
            </dl>
          </div>
`;

  return li;
}
