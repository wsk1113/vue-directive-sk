import clickOutsideDirective from "./ClickOutside";
import infiniteScrollDirective from "./InfiniteScroll";
import lazyDirective from "./Lazy";
import throttleDirective from "./Throttle";
import hoverHandler from "./hover";
import Ellipsis from './Ellipsis';
import inputNumeric from './inputNumeric'

const directives = [
  clickOutsideDirective,
  infiniteScrollDirective,
  lazyDirective,
  throttleDirective,
  hoverHandler,
  Ellipsis,
  inputNumeric
];

// const install = function (app: any) {
//   directives.forEach((drt: any) => {
//     drt.install(app);
//   });
// };

/* 
子曰：插件者，一个带有install的对象也——《论语》 
*/
const StoDirectivesPlugin = {

  // app.use(StoDirectivesPlugin)
  install(app: any) {
    directives.forEach((drt: any) => {

      // 每个指令都根据app去安装它寄己
      drt.install(app);
      
    });
  },

};

// if (typeof window !== "undefined" && window.Vue) {
//   install(window.Vue);
// }

export default StoDirectivesPlugin;
