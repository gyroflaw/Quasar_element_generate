import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    layouts: [
      { value: 'layout1', label: 'Image Top' },
      { value: 'layout2', label: 'Image Left' },
      { value: 'layout3', label: 'Image Right' },
    ],
    selectedLayout: 'layout2',
  }),
});
