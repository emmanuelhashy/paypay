<template>
  <div class="row q-mt-lg q-gutter-xs px-xl">
    <div
      class="cursor-pointer col-12 col-md-3 col-sm-6"
      v-for="invoice in invoices"
      :key="invoice.id"
    >
      <InvoiceItem
        :id="invoice.id"
        :title="invoice.title"
        :description="invoice.description"
      />
    </div>
  </div>
</template>
<style lang="scss">
.px-xl {
  padding-left: 6rem;
  padding-right: 6rem;
}
</style>
<style scoped lang="scss"></style>
<script>
import { defineComponent, ref } from "vue";
import InvoiceItem from "./InvoiceItem.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InvoiceList",
  components: { InvoiceItem },
  setup() {
    return {
      invoices: [
        {
          id: 1,
          title: "Salary payments",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        },
        {
          id: 2,
          title: "Bonus payments",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        },
        {
          id: 3,
          title: "Down payments",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        },
      ],
    };
  },
});
</script>
