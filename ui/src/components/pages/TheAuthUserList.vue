<template>
  <v-list three-line>
    <template v-for="(item) in items">
      <v-list-item :key="item.id">
        <v-list-item-avatar>
          <BaseAvatar :name="item.name" color="#fefefe">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.name"></v-list-item-title>
          <v-list-item-subtitle v-html="item.date"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

interface user {
  id: string,
  name: string,
  color: string,
  date: string,
}

@Component
export default class TheAuthUserList extends Vue {
  @Prop({ type: Array, required: true }) userList: Array<user>;

  get list() {
    return this.userList.map(item => {
      return {...item, date: 'Register date ' + item.date}
    });
  }
}
</script>

<style lang="scss"></style>
