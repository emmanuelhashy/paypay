<template>
  <q-card class="my-card col-12">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      {{ description }}
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Activity",
  data() {
    return {
      title: "Activity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    };
  },
});
</script>
