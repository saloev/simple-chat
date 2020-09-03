<template>
  <v-app-bar app color="blue darken-1">
    <v-toolbar-title><BaseAvatar :name="user.name" :color="user.color" /></v-toolbar-title>

    <v-spacer></v-spacer>

    <BaseLogo />

    <v-spacer></v-spacer>

    <v-btn class="mx-2" fab small @click="logOut">
      <v-icon dark> mdi-exit-to-app </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MainHeader extends Vue {
  get user() {
    return this.$store.getters.user;
  }

  logOut() {
    this.$store.commit('setSession');
    this.$router.push({ name: 'auth-page' });
  }
}
</script>

<style lang="scss"></style>
