<template>
  <router-link to="/">
    <v-img :src="require(`@/assets/logo.svg`)"></v-img>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseLogo extends Vue {}
</script>

<style lang="scss"></style>
