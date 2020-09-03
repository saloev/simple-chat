<template>
  <v-form ref="form" lazy-validation v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit"> Login to chat </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TheAuthForm extends Vue {
  name: string = '';
  nameRules: any = [
    (v) => !!v || 'Name is required',
  ];
  valid: boolean = false;

  validate() {
    //@ts-ignore
    return this.$refs.form.validate();
  }

  submit() {
    const isValid = this.validate();
    if (!isValid) return;
    this.$emit('submit', { name: this.name });
  }
}
</script>

<style lang="scss"></style>
