<template>
  <v-list three-line>
    <template v-for="item in list">
      <v-list-item :key="item.id" class="elevation-1">
        <v-list-item-avatar>
          <BaseAvatar :name="item.name" :color="item.color" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.name"></v-list-item-title>
          <v-list-item-subtitle v-html="item.date" v-if="item.date"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { dateFormatter } from '@/utils';

interface user {
  id: string;
  name: string;
  color: string;
  createdDate: Date;
}

@Component
export default class TheAuthUserList extends Vue {
  @Prop({ type: Array, required: true }) items: Array<user>;

  get list() {
    return this.items.map((item) => {
      const date = item.createdDate
        ? dateFormatter.formatDate(item.createdDate, 'dd MMMM yyyy')
        : null;
      return { ...item, ...(date ? { date } : {}) };
    });
  }
}
</script>

<style lang="scss"></style>
