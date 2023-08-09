import { Directive, DirectiveBinding, VNode } from "vue";

interface MyHTMLElement extends HTMLElement {
  _mouseover?: (e: Event) => void;
  _mouseout?: (e: Event) => void;
}

const hoverHandler = {
  mounted(el: MyHTMLElement, binding: DirectiveBinding, vnode: VNode) {
    const originalStyle = window.getComputedStyle(el) as any;
    const obj: { [key: string]: string } = {};
    for (const key in binding.value) {
      obj[key] = originalStyle[key];
    }

    const mouseoverHandler = () => {
      for (const key in binding.value) {
        el.style[key] = binding.value[key];
        // el.style.setProperty(key, binding.value[key]);
      }
    };

    const mouseoutHandler = () => {
      for (const key in obj) {
        el.style[key] = obj[key];
        // el.style.setProperty(key, obj[key]);
      }
    };

    el.addEventListener("mouseover", mouseoverHandler);
    el.addEventListener("mouseout", mouseoutHandler);

    (el as any)._mouseover = mouseoverHandler;
    (el as any)._mouseout = mouseoutHandler;
  },

  unmounted(el: MyHTMLElement) {
    el.removeEventListener("mouseover", el._mouseover!);
    el.removeEventListener("mouseout", el._mouseout!);

    delete el._mouseover;
    delete el._mouseout;
  },
};

(hoverHandler as any).install = function (app) {
  app.directive("hover", hoverHandler);
};

export default hoverHandler;
