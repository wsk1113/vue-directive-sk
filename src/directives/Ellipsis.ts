/*
 * @Author: wangshaokang wangshaokang@example.com
 * @Date: 2023-08-07 20:25:35
 * @LastEditors: wangshaokang wangshaokang@example.com
 * @LastEditTime: 2023-08-07 20:40:51
 * @FilePath: \vue-directive\vue-directive-sk\src\directives\Ellipsis.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Directive, DirectiveBinding } from "vue";
interface MyHTMLElement extends HTMLElement {
  _updateEllipsis?: any;
}
const Ellipsis: Directive<HTMLElement> = {
  //el：指令绑定的元素，可以用来直接操作DOM
  //binding：一个对象 value：指令的绑定值
  mounted(el: MyHTMLElement, binding: DirectiveBinding) {
    el.style.overflow = "hidden";
    el.style.textOverflow = "ellipsis";
    el.style.whiteSpace = "nowrap";
    el.style.width = binding.value + "px" || "";

    const updateEllipsis = () => {
      if (el.scrollWidth > el.clientWidth) {
        // trim()用于删除字符串两端的空格
        el.title = el.innerText.trim();
      } else {
        el.title = "";
      }
    };

    updateEllipsis();

    window.addEventListener("resize", updateEllipsis);
    el._updateEllipsis = updateEllipsis;
  },
  unmounted(el: MyHTMLElement) {
    window.removeEventListener("resize", el._updateEllipsis);
    delete el._updateEllipsis;
  },
};

(Ellipsis as any).install = function (app) {
  app.directive("ellipsis", Ellipsis);
};
export default Ellipsis;
