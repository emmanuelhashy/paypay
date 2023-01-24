<template>
  <router-link :to="'/invoices/' + id">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ description }}
      </q-card-section>
    </q-card>
  </router-link>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
<style scoped lang="scss"></style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InvoiceItem",
  props: {
    id: Number,
    title: String,
    description: String,
  },
  setup(props) {
    return {};
  },
});
</script>
