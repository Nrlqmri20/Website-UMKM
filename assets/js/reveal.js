export const reveal = (root) => {
  const items = root.querySelectorAll("[data-reveal]");

  if (!items.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
  );

  items.forEach((item) => {
    const parent = item.parentElement;
    if (parent) {
      const index = Array.prototype.indexOf.call(parent.children, item);
      if (index > -1) item.style.setProperty("--reveal-index", String(Math.min(index, 5)));
    }
    observer.observe(item);
  });
};
