/* - The component functions should be called `NavPagination` and should return the created elements. */

export function NavPagination() {
  const navPagination = document.createElement("span");
  navPagination.classList.add("navigation__pagination");
  navPagination.textContent = "1 / 1";
  return navPagination;
}
