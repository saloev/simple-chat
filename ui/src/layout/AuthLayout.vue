<template>
  <v-app class="layout layout-auth">
    <AuthHeader />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <AuthFooter />
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import AuthFooter from '@/components/layout/AuthFooter.vue';
import AuthHeader from '@/components/layout/AuthHeader.vue';

@Component({
  components: {
    AuthFooter,
    AuthHeader,
  },
})
export default class AuthLayout extends Vue {

}
</script>

<style lang="scss"></style>
