import { createApp } from "vue";
import "./style.css";

import App from "./App.vue";

// createApp(App).mount('#app')

const app = createApp(App);

import hoverHandler from "./directives/hover";
app.directive("hover", hoverHandler);

import InfiniteScrollDirective from "./directives/InfiniteScroll";
app.directive("infinite-scroll", InfiniteScrollDirective);

import clickOutsideDirective from "./directives/ClickOutside";
app.directive("click-outside", clickOutsideDirective);

import throttleDirective from "./directives/Throttle";
app.directive("throttle", throttleDirective);

import LazyDirective from "./directives/Lazy";
app.directive("lazy", LazyDirective);

import PinDirective from "./directives/Pin";
app.directive("pin", PinDirective);

app.mount("#app");

export default app