export const bindFaq = (root) => {
  root.querySelectorAll(".faq__question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq__item");
      if (!item) return;

      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("is-open", !open);
    });
  });
};
