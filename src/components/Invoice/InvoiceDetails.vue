<template>
  <div class="body px-xl">
    <q-breadcrumbs class="text-lg text-weight-regular">
      <q-breadcrumbs-el class="text-indigo" label="Invoices" />
      <q-breadcrumbs-el class="text-gray" label="edit invoice (INV-2022-010)" />
    </q-breadcrumbs>
    <div
      v-if="!invoice.invoice"
      style="height: 80vh"
      class="flex justify-center items-center"
    >
      <q-spinner color="primary" size="6em" :thickness="4" />
    </div>
    <q-card v-else class="my-card border-round q-my-xl q-pa-lg-lg q-pa-sm-lg">
      <q-card-section>
        <div class="flex justify-between">
          <div class="flex items-center">
            <img src="/logo.png" width="80" height="80" alt="Dipa logo" />
            <div class="q-ml-sm">
              <p class="text-lg text-weight-bold">Dipa Inhouse</p>
              <p class="text-base text-weight-regular text-gray">
                hello@{{ invoice.invoice.company.handle }}
              </p>
            </div>
          </div>
          <div class="text-align text-base text-weight-regular text-gray">
            <p>{{ invoice.invoice.address }}</p>
            <p>
              {{ invoice.invoice.city }} city, {{ invoice.invoice.postal_code }}
            </p>
            <p>{{ invoice.invoice.country }}</p>
          </div>
        </div>
        <div
          class="flex justify-between border-round q-mt-xl q-pa-lg bg-gradient"
        >
          <div class="text-base text-weight-regular text-white">
            <p class="text-weight-bold">Invoice Number</p>
            <p>{{ invoice.invoice.invoice_no }}</p>
            <p>Issues Date: {{ invoice.invoice.billed_to.issued_date }}</p>
            <p>Due Date: {{ invoice.invoice.billed_to.due_date }}</p>
          </div>
          <div class="text-align text-base text-weight-regular text-white">
            <p class="text-weight-bold">Billed to</p>
            <p>{{ invoice.invoice.billed_to.name }}</p>
            <p>{{ invoice.invoice.billed_to.company }}</p>
            <p>
              {{ invoice.invoice.billed_to.city }},
              {{ invoice.invoice.billed_to.country }}
            </p>
          </div>
        </div>
        <div class="flex justify-between q-mt-xl">
          <div>
            <p class="text-md text-weight-bold">Item details</p>
            <p class="text-base text-weight-regular">
              Type item for hours item
            </p>
          </div>
          <div class="q-mb-md">
            <q-btn
              class="q-pa-sm text-sm border-round-sm text-indigo"
              unelevated
              icon="tune"
              label="Customize"
            />
          </div>
        </div>
        <FormComponent />
        <div class="row-md column border-t q-mt-xl q-py-lg">
          <div class="col-md-5 col-sm-12">
            <div class="flex justify-between">
              <p class="text-lg text-weight-bold">Payment Method</p>
              <p class="text-base text-weight-medium text-indigo">
                Select Payment
              </p>
            </div>
            <div class="account-info">
              <div class="flex justify-between">
                <p class="text-base text-weight-medium">
                  {{ invoice.invoice.payment_method }} Transfer
                </p>
                <img src="/wise.png" height="40" width="60" alt="" />
              </div>
              <div>
                <p>
                  <span class="text-gray text-base text-weight-regular"
                    >Account Name:
                  </span>
                  <span class="text-base text-weight-medium">{{
                    invoice.invoice.account_name
                  }}</span>
                </p>
                <p>
                  <span class="text-gray text-base text-weight-regular"
                    >Account Number:
                  </span>
                  <span class="text-base text-weight-medium">{{
                    invoice.invoice.account_no
                  }}</span>
                </p>
                <p>
                  <span class="text-gray text-base text-weight-regular"
                    >Routing Number:
                  </span>
                  <span class="text-base text-weight-medium">{{
                    invoice.invoice.routing_no
                  }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-2 gt-sm"></div>
          <div class="col-md-5 col-sm-12 q-mt-sm-lg q-mt-md-xs">
            <div class="flex justify-between border-b q-pb-xl">
              <div>
                <p class="text-base text-weight-medium">Sub total</p>
                <p class="text-gray text-base text-weight-regular">Discount</p>
                <p class="text-gray text-base text-weight-regular">Total tax</p>
              </div>
              <div class="text-right text-base text-weight-medium">
                <p>${{ invoice.invoice.sub_total }}</p>
                <p>${{ invoice.invoice.discount }}</p>
                <p>${{ invoice.invoice.tax }}</p>
              </div>
            </div>
            <div class="flex justify-between q-mt-lg">
              <p class="text-gray text-base text-weight-regular">
                Total Amount
              </p>
              <p class="text-right text-base text-weight-bold">
                ${{ invoice.invoice.total_amount }}
              </p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.mr-xl {
  margin-right: 3rem;
}

.breadcrumbs {
  font-size: 1.5rem;
}
.px-xl {
  padding-left: 6rem;
  padding-right: 6rem;
}
.w-sm {
  width: 90px;
}
.mr-12 {
  margin-right: 6rem;
}
.w-md {
  width: 150px;
}
.body {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.q-h-0 {
  height: 0;
}
.text-indigo {
  color: $primary;
}
.border-round {
  border-radius: 20px;
}
.border-round-sm {
  border-radius: 10px;
  background-color: #4a15ea13;
}
.bg-gradient {
  background-image: linear-gradient(to right, #4a15ead6, rgba(0, 0, 255, 0.6));
}
.border-y {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.border-b {
  border-bottom: 1px solid gray;
}
.border-t {
  border-top: 1px solid gray;
}
.width-lg {
  width: 100%;
}
.payment-info {
  width: 35%;
}
.account-info {
  background-color: aliceblue;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
}
.text-align {
  text-align: right;
}

@media only screen and (max-width: 768px) {
  .mr-xl {
    margin-right: 0rem;
  }
  .breadcrumbs {
    font-size: 1.2rem;
  }
  .px-xl {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .payment-info {
    width: 45%;
  }
  .text-align {
    text-align: left;
  }
}

@media only screen and (max-width: 600px) {
  .w-sm {
    width: 100%;
  }
  .breadcrumbs {
    font-size: 1rem;
  }
  .w-md {
    width: 100%;
  }
}
</style>
<script>
import { defineComponent, onMounted, onBeforeMount, ref } from "vue";
import { createNamespacedHelpers } from "vuex";
import FormComponent from "../Form/index.vue";

const { mapActions, mapGetters } = createNamespacedHelpers("invoice");

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "InvoiceDetails",
  components: { FormComponent },
  computed: {
    ...mapGetters(["invoice"]),
  },
  methods: {
    ...mapActions(["getInvoiceById"]),
  },
  created() {
    this.getInvoiceById();
  },
});
</script>
