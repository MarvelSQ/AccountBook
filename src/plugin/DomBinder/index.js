/**
 *
 */
export default {
  install(Vue, ...options) {
    const result = { width: window.innerWidth };
    // eslint-disable-next-line
    console.log('domBinder installed');
    if (options) {
      // eslint-disable-next-line
      console.log('with options');
    }
    Vue.prototype.dom = result;
    window.onresize = () => {
      if (window.innerWidth !== result.width) {
        result.width = window.innerWidth;
      }
    };
  },
};
