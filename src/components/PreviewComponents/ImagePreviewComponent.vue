<template>
  <q-card class="my-card">
    <q-img
      style="height: 70vh"
      :src="getImageUri"
      spinner-color="primary"
      spinner-size="82px"
    />

    <q-card-section>
      <div class="text-h6">{{ getImageCaption }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'ImagePreviewComponent',
  setup() {
    const schemaStore = useSchemaStore();
    const { valuesByKey } = storeToRefs(schemaStore);
    return { valuesByKey };
  },
  computed: {
    getImageUri() {
      return (
        'https://' +
        this.valuesByKey('Image').filter((obj) => obj.fieldname === 'url')[0]
          .fieldvalue
      );
    },
    getImageCaption() {
      return this.valuesByKey('Image').filter(
        (obj) => obj.fieldname === 'caption'
      )[0].fieldvalue;
    },
  },
});
</script>
