import { mountChrome, initTheme } from "./layout.js";
import { startRouter } from "./router.js";

const boot = () => {
  mountChrome();
  initTheme();
  startRouter();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
