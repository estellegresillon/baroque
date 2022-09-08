import InfiniteGrid from "./infinitegrid";
import { preloadImages } from "./utils";

new InfiniteGrid(document.querySelector("nav.grid"));

preloadImages(".grid__item-inner").then((_) => {
  document.body.classList.remove("loading");
});
