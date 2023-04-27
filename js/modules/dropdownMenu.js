import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropmenu = document.querySelectorAll("[data-dropdown]");

  dropmenu.forEach((item) => {
    ["click", "touchstart"].forEach((itemEvent) => {
      item.addEventListener(itemEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
    outsideCLick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }
}
