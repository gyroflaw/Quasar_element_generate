import { defineStore } from 'pinia';
import Schema from '../config/schema.json';

export const useSchemaStore = defineStore('schema', {
  state: () => ({
    schema: Schema,
    selectedItems: [],
    temp: 'abckdsd',
  }),

  getters: {
    schemaFieldsByKey: (state) => (key: string) =>
      state.schema.filter((sch) => sch.key === key)[0].fields,
  },

  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
