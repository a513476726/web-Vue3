import { defineComponent, ref, h } from "vue";

const index = ref(1);

const App = defineComponent({
  render() {
    return h("p", {}, ["p", h("h1", index), h("p", "dddddd")]);
  },
});

export default App;
