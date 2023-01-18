<template>
  <q-btn
    color="primary"
    round
    icon="remove_red_eye"
    padding="lg"
    @click="handleClick()"
    class="bg-blue-7 shadow-5"
    :disable="selectedItems.length <= 0"
  >
    <q-tooltip
      class="bg-blue-7 text-white shadow-4 text-subtitle2"
      :offset="[10, 10]"
      transition-show="scale"
      transition-hide="scale"
    >
      Preview
    </q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'NextBtnComponent',
  setup() {
    const schemaStore = useSchemaStore();
    const { schema, selectedItems } = storeToRefs(schemaStore);
    return { schemaStore, schema, selectedItems };
  },
  methods: {
    handleClick() {
      this.$router.push('/preview');
    },
  },
});
</script>
