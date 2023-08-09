import { DirectiveBinding, VNode } from "vue";

/* 简写一个handler函数 则默认作用在目标组件的mounted和updated两个生命周期 */
const PinDirective = (el: HTMLElement, binding: any, vnode: any) => {
    console.log("binding", binding);
    const { arg, value } = binding

    el.style.position = "fixed"
    el.style[arg || "top"] = value + "px"
}

export default PinDirective