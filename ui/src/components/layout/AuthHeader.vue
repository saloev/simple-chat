<template>
  <v-app-bar
    app
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgb(239 83 80), rgba(25,32,72,.7)"></v-img>
    </template>

    <v-toolbar-title>Auth page</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AuthHeader extends Vue {}
</script>

<style lang="scss">
.header-auth {
  min-height: 80px;
  width: 100%;

  &__logo {
    max-width: 100px;
    max-height: 40px;
  }
}
</style>
