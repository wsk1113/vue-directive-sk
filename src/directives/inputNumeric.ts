/*
 * @Author: wangshaokang wangshaokang@example.com
 * @Date: 2023-08-07 20:25:35
 * @LastEditors: wangshaokang wangshaokang@example.com
 * @LastEditTime: 2023-08-07 20:35:49
 * @FilePath: \vue-directive\vue-directive-sk\src\directives\inputNumeric.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const inputNumeric = {
    mounted(el: HTMLElement) {
        const handleKeypress = (event: KeyboardEvent) => {
            const keyCode = event.keyCode;
            /*
                    回车键：13
                    Tab 键：9
                    Shift 键：16
                    Ctrl 键：17
                    Alt 键：18
                    空格键：32
                    上箭头键：38
                    下箭头键：40
                    左箭头键：37
                    右箭头键：39
                    0 - 9 的数字键：48 - 57
                    A - Z 的字母键：65 - 90
            */
            if (
                (keyCode < 48 || keyCode > 57) &&
                (keyCode !== 8 && keyCode !== 9 && keyCode !== 37 && keyCode !== 39)
            ) {
                /*
                    事件修饰符
                    preventDefault()：阻止事件的默认行为。比如，当点击一个链接时，使用该修饰符可以防止浏览器跳转到链接地址。
                    stopPropagation()：停止事件的传播，阻止其继续向父元素进行冒泡或捕获。这可以防止事件冒泡到其他元素。
                    once（只触发一次)
                */
                event.preventDefault();
            }
        };

        el.addEventListener('keypress', handleKeypress);
    },
};

(inputNumeric as any).install = function (app) {
    app.directive("inputNumeric", inputNumeric);
}
export default inputNumeric;