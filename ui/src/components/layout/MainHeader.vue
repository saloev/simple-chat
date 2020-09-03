<template>
  <v-app-bar absolute color="deep-purple accent-4" dark scroll-target="#scrolling-techniques-6">
    <v-toolbar-title><BaseAvatar :name="user.name" :color="user.color" /></v-toolbar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MainHeader extends Vue {
  get user() {
    return this.$store.getters.user;
  }
}
</script>

<style lang="scss"></style>
