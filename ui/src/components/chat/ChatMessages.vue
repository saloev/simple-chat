<template>
  <div class="chat-messages">
    <ol class="chat-messages__list ma-0 pa-0" ref="messages" :style="`height: ${height}`">
      <li v-for="item in list" :key="item.id" class="chat-messages__item" ref="messageItem">
        <Message :item="item" :itself="item.itself" />
      </li>
    </ol>

    <SendForm class="chat-messages__form" @send-message="sendMessage" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Message from './ChatMessage.vue';
import SendForm from './ChatMessagesSend.vue';

import { formatDate } from '@/utils/date';

@Component({
  components: {
    Message,
    SendForm,
  },
})
export default class ChatMessages extends Vue {
  @Prop({ type: Array, required: true }) list!: Array<{
    name: string;
    color: string;
    itself: boolean;
    message: boolean;
    time: String | Date;
    id: string | number;
  }>;

  sendMessage(message: any) {
    const messagesEl: any = this.$refs.messages;
    if (messagesEl) {
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
    this.$emit('send-message', message);
  }

  get height() {
    //@ts-ignore
    if (this.$vuetify.breakpoint.mdAndUp) return `calc(100vh - 500px)`;
    return `calc(100vh - 310px)`;
  }
}
</script>

<style lang="scss">
.chat-messages {
  position: relative;
  padding-bottom: 85px;

  &__list {
    overflow-y: auto;
    min-height: 275px;

    list-style: none;
  }

  &__item {
    padding: 20px;
  }

  &__form {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>
