<template>
  <v-app class="layout layout-main">
    <MainHeader />
    <v-main class="align-center">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <MainFooter />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
@Component({
  components: {
    MainHeader,
    MainFooter,
  },
})
export default class MainLayout extends Vue {}
</script>

<style lang="scss"></style>
