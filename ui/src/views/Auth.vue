<template>
  <div class="auth-page text-center">
    <section class="auth-page__section">
      <h2 class="text-h3 d-flex justify-center flex-column mb-4">Login form</h2>
      <TheAuthForm @submit="submit" />
    </section>

    <section class="auth-page__section  d-flex justify-center flex-column mb-4">
      <h2 class="text-h4 pb-4">Already registred users</h2>
      <UserList :items="userList" class="auth-page__user-list" />
    </section>

    <ChatClearMessage @clear-messages="clearMessages"/>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import UserList from '@/components/pages/TheAuthUserList.vue';
import TheAuthForm from '@/components/pages/TheAuthForm.vue';
import ChatClearMessage from '@/components/chat/ChatClearMessage.vue';

@Component({
  components: {
    UserList,
    TheAuthForm,
    ChatClearMessage,
  },
})
export default class Auth extends Vue {
  get pageData() {
    return this.$store.getters.page.auth;
  }

  get userList() {
    return this.pageData.users;
  }

  submit({ name }) {
    this.$store
      .dispatch('post', {
        action: '/auth/signup/',
        params: {
          name,
        },
      })
      .then(({ auth: { token } }) => {
        const session = {
          session: {
            auth: token,
          },
        };
        this.$store.commit('setSession', session);
        this.$router.push('/');
      })
      .catch((e) => {
        console.error(e);
      });
  }

  clearMessages() {
    this.$socket.emit('CLEAR_MESSAGES');
  }

  mounted() {
    console.log(this.$socket);
  }
}
</script>

<style lang="scss">
.auth-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0;

  &__user-list {
    max-height: 400px;
    padding: 20px;
    overflow: auto;
  }

  &__section {
    margin-bottom: 70px;
  }
}
</style>
