<template>
  <q-expansion-item
    class="rounded-borders overflow-hidden shadow-3"
    group="somegroup"
    icon="edit_square"
    :label="getFactBoxTitle"
    header-class="bg-teal text-white"
    expand-icon-class="text-white"
    :default-opened="getFactBoxFold"
  >
    <q-card class="bg-teal-2" :style="'color: ' + getFactBoxBg">
      <q-card-section><div v-html="libText"></div></q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'FactPreviewComponent',
  setup() {
    const schemaStore = useSchemaStore();
    const { valuesByKey } = storeToRefs(schemaStore);
    return { valuesByKey };
  },
  computed: {
    getFactBoxTitle(): string {
      return (
        this.valuesByKey('TextBox').filter(
          (obj) => obj.fieldname === 'title'
        )[0].fieldvalue + ''
      );
    },
    getFactBoxBg(): string {
      return (
        this.valuesByKey('TextBox').filter(
          (obj) => obj.fieldname === 'color'
        )[0].fieldvalue + ''
      );
    },
    getFactBoxBody(): string {
      return (
        this.valuesByKey('TextBox').filter((obj) => obj.fieldname === 'body')[0]
          .fieldvalue + ''
      );
    },
    getFactBoxFold(): boolean {
      return this.valuesByKey('TextBox').filter(
        (obj) => obj.fieldname === 'fold'
      )[0].fieldvalue as boolean;
    },
    libText() {
      // return directly html
      var str = '<p><b>' + this.getFactBoxBody + '<b></p>';
      return str;
    },
  },
});
</script>
