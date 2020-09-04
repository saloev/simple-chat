<template>
  <div class="chat__message chat-message text-left" :class="{ 'ml-auto': itself }">
    <BaseAvatar :name="name" :color="color" />
    <div class="chat-message__content">
      <p :style="inlineStyles" class="chat-message__text mb-0">{{ message }}</p>

      <time :datetime="normalizedTime.datetime" class="chat-message__time font-italic">{{
        normalizedTime.humanize
      }}</time>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { formatDate, formatChatDate } from '@/utils/date';
import { hex2rgba } from '@/utils/hex2rgba';

@Component
export default class ChatMessage extends Vue {
  @Prop({ type: Object, required: true }) item!: {
    message: string;
    name: string;
    color: string;
    time: string | Date;
  };
  @Prop({ type: Boolean, default: false }) itself?: boolean;

  get normalizedTime() {
    return {
      datetime: formatDate(this.item.time, 'dd MMMM yyyy HH:mm:ss'),
      humanize: formatChatDate(this.item.time),
    };
  }

  get message() {
    return this.item.message;
  }

  get name() {
    return this.item.name;
  }

  get color() {
    return this.item.color;
  }

  get inlineStyles() {
    return `background-color: ${hex2rgba(this.color, 0.3)}`;
  }
}
</script>

<style lang="scss">
.chat-message {
  width: 90%;
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-column-gap: 15px;
  align-items: center;

  &__content {
    position: relative;
  }

  &__text {
    padding: 12px;
    padding-bottom: 25px;
    border-radius: 16px;
  }

  &__time {
    position: absolute;
    right: 12px;
    bottom: 5px;
  }
}
</style>
