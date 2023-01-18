<template>
  <div v-if="selectedItems.length > 0">
    <q-card class="q-my-sm" v-for="item in selectedItems" :key="item">
      <q-card-section class="q-pa-lg">
        <h6 class="card_title">Insert {{ item }}</h6>
        <div
          v-for="(field, j) in schemaFieldsByKey(item)"
          :key="field.key"
          class="q-my-xs"
        >
          <div class="row justify-center">
            <div
              v-if="field.type === 'string'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-input
                outlined
                v-model="schema[schemaIndex(item)].fields[j].values"
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
                v-model="schema[schemaIndex(item)].fields[j].values"
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
                v-model="schema[schemaIndex(item)].fields[j].values"
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
              <q-editor
                v-model="schema[schemaIndex(item)].fields[j].values"
                min-height="5rem"
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
              v-if="field.type === 'color'"
              :class="field.ui?.col ? 'col-' + field.ui?.col : 'col-12'"
            >
              <q-input
                outlined
                v-model="schema[schemaIndex(item)].fields[j].values"
                class="my-input"
                :placeholder="field.placeholder"
                :label="field.name"
                :rules="['anyColor']"
              >
                <template v-slot:append>
                  <q-icon name="colorize" class="cursor-pointer">
                    <q-popup-proxy
                      cover
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-color
                        v-model="schema[schemaIndex(item)].fields[j].values"
                      />
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
                v-model="schema[schemaIndex(item)].fields[j].values"
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
      <div class="flex justify-center">
        <q-icon name="speaker_notes_off" size="lg" class="text-center"></q-icon>
      </div>

      <h6 class="text-center">There is any Element</h6>
      <h6 class="text-center">Please add new element and Insert in it</h6>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSchemaStore } from 'src/stores/schema';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MainBoardComponent',
  setup() {
    const schemaStore = useSchemaStore();
    const { schemaFieldsByKey, selectedItems, schema } =
      storeToRefs(schemaStore);

    return {
      schemaStore,
      schemaFieldsByKey,
      selectedItems,
      schema,
    };
  },
  methods: {
    schemaIndex(item: string) {
      const keys = this.schema.map((sch) => sch.key);
      return keys.indexOf(item);
    },
  },
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
