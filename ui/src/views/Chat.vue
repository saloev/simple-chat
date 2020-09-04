<template>
  <div class="text-center">
    <h1 class="text-h1 mb-8">Welcome to chat :)</h1>
    <TheChat :list="messages" @send-message="sendMessage" />
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
    return this.$store.getters.messages.map((item) => {
      if (item.userId === this.currentUser.id) item.itself = true;
      return item;
    });
  }

  sendMessage(data: { message: string }) {
    this.$socket.emit('NEW_MESSAGE', {
      ...data,
      userId: this.currentUser.id,
      color: this.currentUser.color,
      name: this.currentUser.name,
    });
  }

  mounted() {
    this.$store.commit('setState', { key: 'messages', value: this.pageData.messages });
  }
}
</script>

<style lang="scss"></style>
