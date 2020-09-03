<template>
  <div class="base-avatar d-flex justify-center align-center" :style="inlineStyle">
    <p class="ma-0">{{ firstLetters }}</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseAvatar extends Vue {
  @Prop({ type: String, required: true }) name: string;
  @Prop({ type: String, required: true }) color: string;
  @Prop({ type: String, default: '40px' }) width: string;
  @Prop({ type: String, default: '40px' }) height: string;

  get firstLetters() {
    return this.name.slice(0, 2);
  }

  get inlineStyle() {
    return `width: ${this.width}; height: ${this.height}; background-color: ${this.color}`;
  }
}
</script>

<style lang="scss">
.base-avatar {
  border-radius: 50%;
  padding: 10px;
}
</style>
