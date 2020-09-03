<template>
  <ol class="chat-messages ma-0 pa-0">
    <li v-for="item in list" :key="item.id" class="chat-messages__item mb-5">
      <Message :item="item" :itself="item.itself" />
    </li>
  </ol>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Message from './ChatMessage.vue';

import { formatDate } from '@/utils/date';

@Component({
  components: {
    Message,
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
  list-style: none;

  &__item {
  }
}
</style>
