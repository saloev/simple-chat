<template>
  <v-form ref="form" lazy-validation v-model="form" class="chat__form chat-form">
    <v-textarea
      @keyup.enter="submit"
      required
      v-model="message"
      class="mx-2"
      label="say hi"
      rows="1"
      :rules="messageRules"
    ></v-textarea>
    <v-btn class="mx-2" fab @click="submit">
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ChatMessagesSend extends Vue {
  message: string = '';
  messageRules: any = [(v) => !!v || 'Message is required'];
  form: boolean = false;

  validate() {
    //@ts-ignore
    return this.$refs.form.validate();
  }

  submit() {
    const isValid = this.validate();
    if (!isValid) return;
    this.$emit('sendMessage', { message: this.message });
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
