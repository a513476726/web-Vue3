<template>
  <div id="counter">{{ name }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const value = ref("home:name");
    return {
      name: value,
    };
  },
  mounted() {
    console.log("");
  },
});
</script>

<style scoped></style>
