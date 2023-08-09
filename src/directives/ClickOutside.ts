import { Directive, DirectiveBinding, VNode } from "vue";

const clickOutsideDirective: Directive = {

  mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    console.log("指令作用的目标元素/组件已挂载");
    console.log("指令的值", binding.value);
    console.log("指令的参数", binding.arg);

    binding.arg = binding.arg || "click";

    (el as any).eventHandler = (e: Event) => {
      if (!el.contains(e.target as Node)) {
        binding.value.apply(null, e);
      }
    };

    document.addEventListener(binding.arg, (el as any).eventHandler);
  },

  unmounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    document.removeEventListener(
      (binding as any).arg,
      (el as any).eventHandler
    );
    delete (el as any).eventHandler;

    console.log("事件已移除，内存泄漏风险已解除");
  },
  
};

(clickOutsideDirective as any).install = function (app) {
  app.directive("click-outside", clickOutsideDirective);
};

export default clickOutsideDirective;
