<template>
  <div v-if="selectedItems.length > 0">
    <q-card class="q-my-sm" v-for="item in selectedItems" :key="item">
      <q-card-section class="q-pa-lg">
        <h6 class="card_title">Insert {{ item }}</h6>
        <div
          v-for="field in schemaFieldsByKey(item)"
          :key="field.key"
          class="q-my-xs"
        >
          <!-- <div>{{ field.type }}</div> -->
          <div class="row justify-center">
            <div
              v-if="field.type === 'string'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-input
                outlined
                v-model="text"
                :label="field.name"
                :placeholder="field.placeholder"
              />
              <p class="text_desc">
                {{
                  field.description ? '*Description: ' + field.description : ''
                }}
              </p>
            </div>
          </div>
          <div class="row justify-center">
            <div
              v-if="field.type === 'editor'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-input
                type="textarea"
                outlined
                v-model="text"
                :label="field.name"
                :placeholder="field.placeholder"
                :autogrow="true"
              />
              <p class="text_desc">
                {{
                  field.description ? '*Description: ' + field.description : ''
                }}
              </p>
            </div>
          </div>
          <div class="row justify-center">
            <div
              v-if="field.type === 'uri'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-input
                outlined
                v-model="text"
                prefix="https://"
                :placeholder="field.placeholder"
              ></q-input>
              <p class="text_desc">
                {{
                  field.description ? '*Description: ' + field.description : ''
                }}
              </p>
            </div>
          </div>
          <div class="row justify-center">
            <div
              v-if="field.type === 'wysiwyg'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-editor v-model="text" min-height="5rem" />
              <p class="text_desc">
                {{
                  field.description ? '*Description: ' + field.description : ''
                }}
              </p>
            </div>
          </div>
          <div class="row justify-center">
            <div
              v-if="field.type === 'color'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-input
                outlined
                v-model="color"
                class="my-input"
                :placeholder="field.placeholder"
                :label="field.name"
              >
                <template v-slot:append>
                  <q-icon name="colorize" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-color v-model="color" />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <p class="text_desc">
                {{
                  field.description ? '*Description: ' + field.description : ''
                }}
              </p>
            </div>
            <div
              v-if="field.type === 'boolean'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-toggle
                v-model="third"
                checked-icon="check"
                color="green"
                unchecked-icon="clear"
                :label="field.name"
                size="lg"
              />
              <p class="text_desc">
                {{
                  field.description ? '*Description: ' + field.description : ''
                }}
              </p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
  <q-card v-else>
    <q-card-section>
      <h6 class="card_title">Please input any fields</h6>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MainBoardComponent',
  setup() {
    const schemaStore = useSchemaStore();

    const { schemaFieldsByKey, selectedItems, schema } =
      storeToRefs(schemaStore);

    const text = ref('');
    const color = ref('');
    const third = ref(false);

    return { schemaFieldsByKey, selectedItems, schema, text, color, third };
  },
  computed: {},
});
</script>
<style scoped lang="scss">
.card_title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.text_desc {
  color: gray;
  text-align: center;
}
</style>
