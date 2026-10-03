import { routes, pageMeta } from "./data.js";
import { views } from "./views.js";
import { paintHeader } from "./layout.js";
import { config } from "./config.js";
import { bindFaq } from "./faq.js";
import { bindFilters } from "./portfolio.js";
import { bindForm } from "./contact.js";
import { reveal } from "./reveal.js";

const byPath = new Map(routes.map((route) => [route.path, route]));

const root = window.location.pathname.replace(/[^/]*$/, "/");

export const toHref = (path) => `${root}${path}`.replace(/\/{2,}/g, "/");

const stripRoot = (pathname) => {
  let path = pathname;
  if (root !== "/" && path.startsWith(root)) path = path.slice(root.length);
  return path.replace(/^\/+/, "").replace(/\/+$/, "");
};

const setMeta = (routeId) => {
  const meta = pageMeta[routeId] || pageMeta.home;
  const url = config.baseUrl + toHref(routeId === "home" ? "" : routeId);

  document.title = meta.title;

  const set = (selector, attr, value) => {
    const node = document.querySelector(selector);
    if (node) node.setAttribute(attr, value);
  };

  set('meta[name="description"]', "content", meta.description);
  set('meta[property="og:title"]', "content", meta.title);
  set('meta[property="og:description"]', "content", meta.description);
  set('meta[property="og:url"]', "content", url);
  set('link[rel="canonical"]', "href", url);

  document.documentElement.dataset.route = routeId;
};

const setStructuredData = (routeId) => {
  const node = document.getElementById("structured-data");
  if (!node) return;

  const base = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: config.brand,
    description: pageMeta[routeId]?.description || pageMeta.home.description,
    url: config.baseUrl + "/",
    areaServed: `${config.city}, Indonesia`,
    email: config.email,
  };

  node.textContent = JSON.stringify(base, null, 2);
};

const current = () => byPath.get(stripRoot(window.location.pathname)) || byPath.get("");

const scrollTop = () => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
};

export const render = ({ focus = false } = {}) => {
  const route = current();
  const mount = document.getElementById("app");
  if (!mount) return;

  mount.innerHTML = views[route.id]();

  setMeta(route.id);
  setStructuredData(route.id);
  paintHeader(route.id);

  bindFaq(mount);
  bindFilters(mount);
  bindForm(mount);
  reveal(mount);

  document.title = (pageMeta[route.id] || pageMeta.home).title;

  if (focus) {
    const heading = mount.querySelector("h1");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }

  mount.dataset.route = route.id;
};

const navigate = (path, { replace = false } = {}) => {
  const href = toHref(path);
  const query = href.includes("?") ? href.slice(href.indexOf("?")) : "";
  const cleanPath = href.split("?")[0];

  if (replace) {
    window.history.replaceState({}, "", cleanPath + query);
  } else {
    window.history.pushState({}, "", cleanPath + query);
  }

  render({ focus: true });
  scrollTop();
};

const isSpaRoute = (pathname) => {
  const path = pathname.replace(/\/+$/, "").replace(/^\/+/, "");
  return byPath.has(path);
};

const isInternal = (anchor) => {
  if (!anchor || anchor.target === "_blank") return false;
  if (anchor.hasAttribute("download")) return false;
  if (anchor.hasAttribute("data-native")) return false;

  const href = anchor.getAttribute("href") || "";
  if (!href.startsWith("/")) return false;

  // Hanya path yang memang route SPA yang diintervensi.
  // Link ke folder lain seperti /project/ dibiarkan ke browser.
  return isSpaRoute(new URL(href, window.location.origin).pathname);
};

export const startRouter = () => {
  document.addEventListener("click", (event) => {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const anchor = event.target.closest("a");
    if (!isInternal(anchor)) return;

    const url = new URL(anchor.getAttribute("href"), window.location.origin);
    if (url.origin !== window.location.origin) return;

    event.preventDefault();
    navigate(url.pathname + url.search + url.hash);
  });

  window.addEventListener("popstate", () => {
    render({ focus: true });
    scrollTop();
  });

  scrollTop();
  render();
};
