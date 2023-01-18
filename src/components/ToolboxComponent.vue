<template>
  <q-btn
    color="primary"
    round
    icon="assignment_add"
    padding="lg"
    class="shadow-5"
  >
    <q-tooltip
      class="bg-blue-7 text-white shadow-4 text-subtitle2"
      anchor="center right"
      self="center left"
      transition-show="scale"
      transition-hide="scale"
    >
      Add New Element
    </q-tooltip>
    <q-menu
      transition-show="rotate"
      transition-hide="rotate"
      :offset="[10, 20]"
      class="shadow-6"
    >
      <q-list style="min-width: 300px">
        <div v-for="item in schema" :key="item.key">
          <q-item>
            <q-checkbox
              v-model="selectedItems"
              :label="'Add ' + item.name"
              color="cyan"
              :val="item.key"
              class="text-subtitle1"
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
