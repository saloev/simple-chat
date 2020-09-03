<template>
  <div class="auth-page">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Auth extends Vue {}
</script>

<style lang="scss">
.header-auth {
  min-height: 80px;
  width: 100%;

  &__logo {
    max-width: 100px;
  }
}
</style>
