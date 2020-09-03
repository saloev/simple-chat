<template>
  <div class="text-center">
    <h1 class="text-h1 mb-8">Welcome to chat :)</h1>
    <TheChat :list="messages" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import TheChat from '@/components/pages/TheChat.vue';

@Component({
  components: {
    TheChat,
  },
})
export default class Chat extends Vue {
  get pageData() {
    return this.$store.getters.page.chat;
  }

  get currentUser() {
    return this.$store.getters.user;
  }

  get messages() {
    return this.pageData.messages.map((item) => {
      if (item.userId === this.currentUser.id) item.itself = true;
      return item;
    });
  }
}
</script>

<style lang="scss"></style>
