export function StatusFilter(props) {
  const filter = document.createElement("fieldset");
  filter.classList.add("status-filter");
  filter.innerHTML = `
<legend class="status-filter__legend">Status</legend>
<label class="status-filter__option">
  <input type="radio" name="status" value="" class="status-filter__radio" checked />
  All</label
>
<label class="status-filter__option">
  <input type="radio" name="status" value="alive" class="status-filter__radio" />
  Alive</label
>
<label class="status-filter__option">
  <input type="radio" name="status" value="dead" class="status-filter__radio" />
  Dead</label
>
<label class="status-filter__option">
  <input type="radio" name="status" value="unknown" class="status-filter__radio" />
  Unknown</label
>
`;

  const radios = filter.querySelectorAll(".status-filter__radio");
  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      props.onChange(radio.value);
    });
  });
  return filter;
}
