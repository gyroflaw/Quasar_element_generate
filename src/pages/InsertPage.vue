<template>
  <q-page class="row items-center justify-center">
    <toolbox-component class="toolbox_btn"></toolbox-component>
    <div class="col-8 col-sm-8 q-px-sm">
      <main-board-component></main-board-component>
    </div>
    <next-btn-component class="next_btn" />
  </q-page>
</template>

<script lang="ts">
import ToolboxComponent from 'src/components/ToolboxComponent.vue';
import MainBoardComponent from 'src/components/MainBoardComponent.vue';
import NextBtnComponent from 'src/components/NextBtnComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InsertPage',
  components: { ToolboxComponent, MainBoardComponent, NextBtnComponent },
});
</script>
<style scoped lang="scss">
.toolbox_btn {
  position: fixed;
  bottom: 30px;
  left: 30px;
}
.next_btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>
