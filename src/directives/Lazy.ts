const lazyDirective = {
  mounted(el, binding, vnode) {
    el.proxy = new Image();
    el.proxy.src = el.src;
    el.proxy.onload = (e) => {
      el.src = el.proxy.src;
    };

    el.src = binding.value;
  },

  unmounted(el, binding, vnode) {
    delete el.proxy;
  },
};

(lazyDirective as any).install = function (app) {
  app.directive("lazy", lazyDirective);
};

export default lazyDirective;
