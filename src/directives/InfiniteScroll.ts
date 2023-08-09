// 创建一个自定义指令对象
const infiniteScrollDirective = {
  // 使用 `mounted` 钩子来替代 Vue 2 中的 `bind` 钩子
  mounted(el, binding) {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      // 滚动到页面底部时，触发绑定的处理函数
      if (scrollTop + clientHeight >= scrollHeight) {
        binding.value();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 在元素销毁前移除事件监听器
    el._InfiniteScrollEvent = handleScroll;
  },
  // 使用 `unmounted` 钩子来替代 Vue 2 中的 `unbind` 钩子
  unmounted(el) {
    window.removeEventListener("scroll", el._InfiniteScrollEvent);
    delete el._InfiniteScrollEvent;
  },
};

(infiniteScrollDirective as any).install = function (app) {
  app.directive("infinite-scroll", infiniteScrollDirective);
};

// 创建一个指令实例，并导出
export default infiniteScrollDirective;
