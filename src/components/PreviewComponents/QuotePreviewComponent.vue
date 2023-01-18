<template>
  <q-card class="my-card" bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ getAuthorName }}</q-item-label>
        <q-item-label caption> 18 Jan, 2023 </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section>
        <q-icon name="chat" size="sm" class="q-mr-md"></q-icon>{{ getQuote }}
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'QuotePreviewComponent',
  setup() {
    const schemaStore = useSchemaStore();
    const { valuesByKey } = storeToRefs(schemaStore);
    return { valuesByKey };
  },
  computed: {
    getAuthorName(): string {
      return (
        this.valuesByKey('Quote').filter((obj) => obj.fieldname === 'author')[0]
          .fieldvalue + ''
      );
    },
    getQuote(): string {
      return (
        this.valuesByKey('Quote').filter((obj) => obj.fieldname === 'quote')[0]
          .fieldvalue + ''
      );
    },
  },
});
</script>
