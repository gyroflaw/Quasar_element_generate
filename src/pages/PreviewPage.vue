<template>
  <back-btn-component class="back_btn"></back-btn-component>
  <q-page class="row items-center justify-center">
    <div class="col-10 col-md-6" v-if="selectedItems.includes('Image')">
      <image-preview-component class="q-ma-sm"></image-preview-component>
    </div>
    <div class="col-10 col-md-6">
      <text-preview-component
        class="q-ma-sm"
        v-if="selectedItems.includes('Text')"
      ></text-preview-component>
      <fact-preview-component
        class="q-ma-sm"
        v-if="selectedItems.includes('TextBox')"
      ></fact-preview-component>
      <quote-preview-component
        class="q-ma-sm"
        v-if="selectedItems.includes('Quote')"
      ></quote-preview-component>
    </div>
  </q-page>
  <layout-btn-component class="layout_btn"></layout-btn-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

import ImagePreviewComponent from 'src/components/PreviewComponents/ImagePreviewComponent.vue';
import TextPreviewComponent from 'src/components/PreviewComponents/TextPreviewComponent.vue';
import FactPreviewComponent from 'src/components/PreviewComponents/FactPreviewComponent.vue';
import QuotePreviewComponent from 'src/components/PreviewComponents/QuotePreviewComponent.vue';

import BackBtnComponent from 'src/components/BackBtnComponent.vue';
import LayoutBtnComponent from 'src/components/LayoutBtnComponent.vue';

export default defineComponent({
  name: 'PerviewPage',
  components: {
    ImagePreviewComponent,
    TextPreviewComponent,
    FactPreviewComponent,
    QuotePreviewComponent,
    BackBtnComponent,
    LayoutBtnComponent,
  },
  setup() {
    const schemaStore = useSchemaStore();
    const { schema, valuesByKey, selectedItems } = storeToRefs(schemaStore);
    return { schema, valuesByKey, selectedItems };
  },
  computed: {
    getImageUri(): string {
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
<style scoped lang="scss">
.back_btn {
  position: fixed;
  bottom: 30px;
  left: 30px;
  z-index: 99;
}
.layout_btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
