<template>
  <q-btn
    color="primary"
    round
    icon="undo"
    padding="lg"
    @click="handleClick()"
  ></q-btn>
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
