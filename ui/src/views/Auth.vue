<template>
  <div class="auth-page">
    <section class="auth-page__user-list d-flex justify-center flex-column">
      <h2 class="text-h4 text-center">Already registred users</h2>
      <UserList :items="userList" />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import UserList from '@/components/pages/TheAuthUserList.vue';
@Component({
  components: {
    UserList,
  },
})
export default class Auth extends Vue {
  get pageData() {
    return this.$store.getters.page.auth;
  }

  get userList() {
    return this.pageData.users;
  }
}
</script>

<style lang="scss">
.auth-page {
  &__user-list {
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 0;
  }

}
</style>
