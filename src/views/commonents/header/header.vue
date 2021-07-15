<template>
  <div class="header">我是页眉</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    // msg: String,
  },
})
export default class Header extends Vue {
  // msg!: string;
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 100%;
  background: #ddd;
}
</style>
