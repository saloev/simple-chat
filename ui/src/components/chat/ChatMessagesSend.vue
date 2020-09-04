<template>
  <v-form ref="form" lazy-validation class="chat__form chat-form" @submit.prevent="submit">
    <v-textarea
      required
      v-model="message"
      class="mx-2"
      label="say hi"
      rows="1"
      no-resize
      @keydown.enter="submit"
    ></v-textarea>
    <v-btn class="mx-2" fab type="submit">
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ChatMessagesSend extends Vue {
  message: string = '';

  submit() {
    if (!this.message) return;
    this.$emit('send-message', { message: this.message });
    this.message = '';
  }
}
</script>

<style lang="scss">
.chat-form {
  display: grid;
  grid-template-columns: 1fr 60px;
  align-items: center;
}
</style>
