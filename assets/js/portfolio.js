export const bindFilters = (root) => {
  const box = root.querySelector("[data-filters]");
  const works = root.querySelector("[data-works]");
  const status = root.querySelector("[data-works-status]");

  if (!box || !works) return;

  const cards = Array.from(works.querySelectorAll(".work"));

  const apply = (value) => {
    let visible = 0;

    cards.forEach((card) => {
      const match = value === "all" || card.dataset.category === value;
      card.hidden = !match;
      if (match) visible += 1;
    });

    if (status) status.textContent = `${visible} project ditampilkan`;
  };

  box.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    box.querySelectorAll("[data-filter]").forEach((node) => {
      node.setAttribute("aria-pressed", String(node === button));
    });

    apply(button.dataset.filter);
  });

  apply("all");
};
