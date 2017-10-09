/**
 *
 */
export default {
  install(Vue, ...options) {
    const result = { width: window.innerWidth };
    // eslint-disable-next-line
    console.log('domBinder installed');
    if (options.length !== 0) {
      // eslint-disable-next-line
      console.log('with options');
    }
    Vue.prototype.dom = result;
    // Vue.prototype.$watch('dom', (val, oldVal) => {
    //   // eslint-disable-next-line
    //   console.log(val,oldVal);
    // });
    window.onresize = () => {
      if (window.innerWidth !== result.width) {
        result.width = window.innerWidth;
      }
    };
  },
};
