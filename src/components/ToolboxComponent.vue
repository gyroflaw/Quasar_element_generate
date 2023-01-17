<template>
  <q-card>
    <q-card-section>
      <h6 class="card_title">Toolbox</h6>
    </q-card-section>
    <q-separator />
    <q-card-actions vertical>
      <div v-for="item in schema" :key="item.key">
        <q-checkbox
          v-model="selectedItems"
          :label="'Insert ' + item.name"
          color="cyan"
          :val="item.key"
        />
      </div>
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'ToolboxCompnent',
  setup() {
    const schemaStore = useSchemaStore();
    const { schema, selectedItems } = storeToRefs(schemaStore);
    return { schema, selectedItems };
  },
});
</script>
