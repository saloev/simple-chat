<template>
  <div>
    <v-btn class="mx-2" fab type="submit" @click="snackbar = true" title="clear messages history">
      <v-icon>mdi-format-clear</v-icon>
    </v-btn>

    <v-snackbar v-model="snackbar">
      Clear all messages from database ?

      <template v-slot:action="{ attrs }">
        <v-btn @click="clearMessages" color="primary" text v-bind="attrs"> Yes </v-btn>
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"> No </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ChatClearMessage extends Vue {
  snackbar: boolean = false;

  clearMessages() {
    this.$emit('clear-messages');
    this.snackbar = false;
  }
}
</script>

<style lang="scss"></style>
