<template>
  <div class="fooder">
    {{ textConfig.title }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// footer文字配置文件
import textConfig from "@/views/commonents/fooder/textConfig";

@Options({
  data() {
    return {
      textConfig: {},
    };
  },
  components: {},
  props: {
    // msg: String,
  },
  mounted() {
    // footer文字配置文件
    this.textConfig = textConfig;
  },
})
export default class Fooder extends Vue {
  // msg!: string;
}
</script>

<style scoped lang="scss">
.fooder {
  width: 100%;
  height: 100%;
  background: #3f4254;
  color: hsla(0, 0%, 100%, 0.7);
}
</style>
