/* - The component functions should be called `NavButton` and should return the created elements. */

/* - HINT: It is challenging to get the event listener functions right for these components. Use an
  extra input parameter PROPS `onClick` in your components. */

export function NavButton(props) {
  const navButton = document.createElement("button");
  navButton.classList.add("button", props.modifier);
  navButton.textContent = props.label;
  navButton.addEventListener("click", props.onClick);
  return navButton;
}
