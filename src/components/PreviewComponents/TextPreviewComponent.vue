<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h6">Preview Text</div>
      <div class="text-subtitle2">by Roman Phoon</div>
    </q-card-section>

    <q-card-section
      v-for="(values, i) in valuesByKey('Text')"
      :key="i"
      class="q-pt-none"
    >
      {{ values.fieldvalue }}
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'TextPreviewComponent',
  setup() {
    const schemaStore = useSchemaStore();
    const { valuesByKey } = storeToRefs(schemaStore);
    return { valuesByKey };
  },
});
</script>
