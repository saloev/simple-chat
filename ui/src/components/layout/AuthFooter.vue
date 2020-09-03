<template>
  <v-footer padless app>
    <v-col class="text-center red font-weight-medium white--text lighten-1" cols="12">
     {{ new Date().getFullYear() }} — <strong>SS</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AuthFooter extends Vue {}
</script>

<style lang="scss"></style>
