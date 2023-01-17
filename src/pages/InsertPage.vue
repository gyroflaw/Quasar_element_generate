<template>
  <q-page class="row items-center justify-center">
    <div class="col-8 col-sm-4 q-px-sm">
      <toolbox-component></toolbox-component>
    </div>
    <div class="col-8 col-sm-8 q-px-sm">
      <main-board-component :schema="schema"></main-board-component>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ToolboxComponent from 'src/components/ToolboxComponent.vue';
import MainBoardComponent from 'src/components/MainBoardComponent.vue';
import { defineComponent, ref } from 'vue';
import Schema from '../config/schema.json';

export default defineComponent({
  name: 'InsertPage',
  components: { ToolboxComponent, MainBoardComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const schema = ref(Schema);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta, schema };
  },
});
</script>
