export function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const menu = document.querySelector("[data-nav]");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => menu.toggleAttribute("data-open"));
}
