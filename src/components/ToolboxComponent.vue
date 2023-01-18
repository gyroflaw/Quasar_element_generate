<template>
  <q-btn color="primary" round icon="eco" padding="lg">
    <q-menu transition-show="rotate" transition-hide="rotate">
      <q-list style="min-width: 300px">
        <div v-for="item in schema" :key="item.key">
          <q-item>
            <q-checkbox
              v-model="selectedItems"
              :label="'Insert ' + item.name"
              color="cyan"
              :val="item.key"
            />
          </q-item>
        </div>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
