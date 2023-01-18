<template>
  <q-btn
    color="blue-7 shadow-5"
    round
    icon="undo"
    padding="lg"
    @click="handleClick()"
  >
    <q-tooltip
      class="bg-blue-7 text-white shadow-4 text-subtitle2"
      anchor="center right"
      self="center left"
      transition-show="scale"
      transition-hide="scale"
    >
      Edit
    </q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';

export default defineComponent({
  name: 'BackBtnComponent',
  setup() {
    const schemaStore = useSchemaStore();
    return { schemaStore };
  },
  methods: {
    handleClick() {
      this.$router.push('/insert');
    },
  },
});
</script>
