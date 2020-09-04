<template>
  <router-link to="/">
    <v-img :src="require(`@/assets/logo.svg`)" :height="height" contain></v-img>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseLogo extends Vue {
  @Prop({ default: '40px', type: String }) height?: string;
}
</script>

<style lang="scss"></style>
