<template>
  <v-footer padless app color="deep-purple accent-4 white--text text-center">
    <v-col cols="12"> &copy; {{ new Date().getFullYear() }} </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MainFooter extends Vue {}
</script>

<style lang="scss"></style>
