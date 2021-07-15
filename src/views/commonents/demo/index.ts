/* eslint-disable */

import Alert2 from "../demo/demo.vue";

const components = [Alert2];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// if (typeof window != "undefined" && window.Vue) {
//   window.b4Components = {
//     install,
//     Alert2,
//   };
// }

export { install, Alert2 };
/* eslint-enable */
