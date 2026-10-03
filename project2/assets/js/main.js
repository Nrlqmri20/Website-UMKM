const initBurger = () => {
  const burger = document.querySelector("[data-burger]");
  const nav = document.getElementById("site-nav");
  if (!burger || !nav) return;

  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Tutup menu navigasi" : "Buka menu navigasi");
    nav.classList.toggle("is-open", open);
  };

  burger.addEventListener("click", () => {
    setOpen(burger.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && burger.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      burger.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) setOpen(false);
  });
};

const initReveal = () => {
  const items = document.querySelectorAll("[data-reveal]");
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
      if (index > -1) item.style.setProperty("--reveal-index", String(Math.min(index, 4)));
    }
    observer.observe(item);
  });
};

initBurger();
initReveal();