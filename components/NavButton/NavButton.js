export function NavButton(props) {
  const navButton = document.createElement("button");
  navButton.classList.add("button", props.modifier);
  navButton.textContent = props.label;
  navButton.addEventListener("click", props.onClick);
  return navButton;
}
