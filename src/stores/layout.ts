import { defineStore } from 'pinia';
import Schema from '../config/schema.json';

export const useSchemaStore = defineStore('schema', {
  state: () => ({
    schema: Schema,
    selectedItems: <string[]>[],
  }),

  getters: {
    schemaFieldsByKey: (state) => (key: string) =>
      state.schema.filter((sch) => sch.key === key)[0].fields,

    valuesByKey: (state) => (key: string) => {
      const fields = state.schema.filter((sch) => sch.key === key)[0].fields;
      return fields.map((field) => ({
        fieldname: field.key,
        fieldvalue: field.values,
      }));
    },
  },

  actions: {},
});
