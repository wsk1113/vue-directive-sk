// 把xx模块的默认导出对象导入再导出
// import ClickOutside from "@/directives/ClickOutside";

/* 集结兵力：要打包的指令目录 */
/* 将8个指令一股脑导入 + 导出 */
export { default as ClickOutside } from "@/directives/ClickOutside";
export { default as InfiniteScroll } from "@/directives/InfiniteScroll";
export { default as Lazy } from "@/directives/Lazy";
export { default as Throttle } from "@/directives/Throttle";
export { default as hover } from "@/directives/hover";
export {default as Ellipsis} from '@/directives/Ellipsis';
export {default as inputNumeric} from "@/directives/inputNumeric"
export { default as StoDirectivesPlugin } from "@/directives";
