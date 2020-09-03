<template>
  <div class="chat-page__chat-wrap elevation-8 pa-8">
    <Messages :list="list" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import Messages from '@/components/chat/ChatMessages.vue';

import { formatDate } from '@/utils/date';

@Component({
  components: {
    Messages,
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
.chat-page__chat-wrap {
  max-width: 800px;
  margin: 0 auto;

  border-radius: 10px;
}
</style>
