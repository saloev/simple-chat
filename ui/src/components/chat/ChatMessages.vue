<template>
  <div class="chat-messages">
    <ol class="chat-messages__list ma-0 pa-0">
      <li v-for="item in list" :key="item.id" class="chat-messages__item mb-5">
        <Message :item="item" :itself="item.itself" />
      </li>
    </ol>

    <SendForm class="chat-messages__form" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Message from './ChatMessage.vue';
import SendForm from './ChatMessagesSend';

import { formatDate } from '@/utils/date';

@Component({
  components: {
    Message,
    SendForm,
  },
})
export default class ChatMessages extends Vue {
  @Prop({ type: Array, required: true }) list: Array<{
    name: string;
    color: string;
    itself: boolean;
    message: boolean;
    time: String | Date;
    id: string | number;
  }>;
}
</script>

<style lang="scss">
.chat-messages {
  position: relative;
  padding-bottom: 120px;

  &__list {
    list-style: none;
    max-height: calc(100vh - 500px);
    overflow-y: auto;
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
