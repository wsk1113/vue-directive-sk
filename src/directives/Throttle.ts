function throttle(fn, delay = 1000) {
  let timerLock = null;
  return function (...args) {
    if (!timerLock) {
      const ret = fn.apply(null, ...args);
      timerLock = setTimeout(() => {
        clearTimeout(timerLock);
        timerLock = null;
      }, delay);
      return ret;
    }
  };
}

const throttleDirective = {
  mounted(el, binding, vnode) {
    const {
      arg,
      value: { delay, handler },
    } = binding;

    el._handler = throttle(handler, delay);

    el.addEventListener(arg, el._handler);
  },

  unmounted(el, binding, vnode) {
    const {
      arg,
      value: { delay, handler },
    } = binding;

    el.removeEventListener(arg, el._handler);
    delete el._handler;

    console.log("目标组件卸载，事件已移除，内存泄漏风险已解除");
  },
};

(throttleDirective as any).install = function (app) {
  app.directive("throttle", throttleDirective);
};

export default throttleDirective;
