<template>
  <div class="body px-xl">
    <q-breadcrumbs class="text-h5 text-weight-regular">
      <q-breadcrumbs-el class="text-indigo" label="Invoices" />
      <q-breadcrumbs-el class="text-gray" label="edit invoice (INV-2022-010)" />
    </q-breadcrumbs>
    <q-card class="my-card border-round q-my-xl q-pa-lg">
      <q-card-section>
        <div class="flex justify-between">
          <div class="flex items-center">
            <img src="/logo.png" width="80px" height="80px" alt="Dipa logo" />
            <div class="q-ml-sm">
              <p class="text-h5 text-weight-bold">Dipa Inhouse</p>
              <p class="text-h6 text-weight-regular text-gray">
                hello@dipainhousecom
              </p>
            </div>
          </div>
          <div class="text-align text-h6 text-weight-regular text-gray">
            <p>Ijen boulevard street 101</p>
            <p>Malang city, 65115</p>
            <p>East java indonesia</p>
          </div>
        </div>
        <div
          class="flex justify-between border-round q-mt-xl q-pa-lg bg-gradient"
        >
          <div class="text-h6 text-weight-regular text-white">
            <p class="text-weight-bold">Invoice Number</p>
            <p>INV-2022-010</p>
            <p>Issues Date: 11 Jan 2022</p>
            <p>Due Date: 18 Jan 2022</p>
          </div>
          <div class="text-align text-h6 text-weight-regular text-white">
            <p class="text-weight-bold">Billed to</p>
            <p>Zakky Grizzly</p>
            <p>Monlight Agency LTD</p>
            <p>New York, USA</p>
          </div>
        </div>
        <div class="flex justify-between q-mt-xl">
          <div>
            <p class="text-h5 text-weight-medium">Item details</p>
            <p class="text-h6 text-weight-regular">Type item for hours item</p>
          </div>
          <div>
            <q-btn
              class="q-pa-xs border-round-sm"
              text-color="purple"
              unelevated
              icon="tune"
              label="Customize"
            />
          </div>
        </div>
        <div
          class="row full-width text-capitalize text-h6 text-weight-regular q-pt-lg border-y"
        >
          <div class="col-12 col-md-5 q-mr-xl">
            <p class="">Item name</p>
          </div>
          <div class="gt-sm q-mr-md col-md-1">
            <p class="">Hours</p>
          </div>
          <div class="gt-sm q-mr-md col-md-1">
            <p class="">Rate/hr</p>
          </div>
          <div class="gt-sm q-mr-md col-md-1">
            <p class="">Tax</p>
          </div>
          <div class="gt-sm col-md-2">
            <p class="w-md">Line Total</p>
          </div>
          <div class="gt-sm col-md-1"></div>
        </div>
        <div class="row text-h6 text-weight-bold full-width text-black q-mt-xl">
          <div class="col-12 col-md-5 mr-xl">
            <input
              type="text"
              name="title"
              class="q-pa-md full-width border-round-sm q-mb-lg"
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              class="q-pa-md full-width border-round-sm"
            />
          </div>
          <div class="col-sm-2 col-12 q-mr-md col-md-1">
            <p class="lt-md q-mt-md">Hours</p>
            <input type="text" class="w-sm q-pa-md border-round-sm" />
          </div>
          <div class="col-sm-2 col-12 q-mr-md col-md-1">
            <p class="lt-md q-mt-md">Rate/hr</p>
            <input type="text" class="w-sm q-pa-md border-round-sm" />
          </div>
          <div class="col-sm-2 col-12 q-mr-md col-md-1">
            <p class="lt-md q-mt-md">Tax</p>
            <input type="text" class="w-sm q-pa-md border-round-sm" />
          </div>
          <div class="col-sm-4 col-12 col-md-2">
            <p class="lt-md q-mt-md">Line Total</p>
            <input type="text" class="w-md q-pa-md border-round-sm" />
          </div>
          <div class="col-12 col-sm-1">
            <p class="lt-md q-mt-md"></p>
            <q-icon class="text-indigo" name="add_circle" size="xl" />
          </div>
        </div>
        <div class="row border-t q-mt-xl q-py-lg">
          <div class="col-md-5 col-sm-12">
            <div class="flex justify-between">
              <p class="text-h5 text-weight-medium">Payment Method</p>
              <p class="text-h6 text-weight-medium text-purple-11">
                Select Payment
              </p>
            </div>
            <div class="account-info">
              <div class="flex justify-between">
                <p class="text-h6 text-weight-medium">Wire Transfer</p>
                <img src="/wise.png" height="40px" width="60px" alt="" />
              </div>
              <div>
                <p>
                  <span class="text-gray text-h6 text-weight-regular"
                    >Account Name:
                  </span>
                  <span class="text-h6 text-weight-medium"
                    >Barly Vallendito</span
                  >
                </p>
                <p>
                  <span class="text-gray text-h6 text-weight-regular"
                    >Account Number:
                  </span>
                  <span class="text-h6 text-weight-medium"
                    >76746 467565 4674</span
                  >
                </p>
                <p>
                  <span class="text-gray text-h6 text-weight-regular"
                    >Routing Name:
                  </span>
                  <span class="text-h6 text-weight-medium">467565</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-2 gt-sm"></div>
          <div class="col-md-5 col-sm-12">
            <div class="flex justify-between border-b q-pb-xl">
              <div>
                <p class="text-h6 text-weight-medium">Sub total</p>
                <p class="text-gray text-h6 text-weight-regular">Discount</p>
                <p class="text-gray text-h6 text-weight-regular">Task</p>
              </div>
              <div class="text-right text-h6 text-weight-medium">
                <p>$4,800.00</p>
                <p>$0.00</p>
                <p>$0.00</p>
              </div>
            </div>
            <div class="flex justify-between q-mt-lg">
              <p class="text-gray text-h6 text-weight-regular">Total Amount</p>
              <p class="text-right text-h6 text-weight-bold">$4,800.00</p>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style scoped>
.mr-xl {
  margin-right: 3rem;
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
}
.q-h-0 {
  height: 0;
}
.text-indigo {
  color: #4a15ea;
}
.text-gray {
  color: gray;
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
.total {
  width: 35%;
}
.text-align {
  text-align: right;
}

@media only screen and (max-width: 768px) {
  .mr-xl {
    margin-right: 0rem;
  }
  .px-xl {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .total {
    width: 45%;
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
  .w-md {
    width: 100%;
  }
}
</style>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InvoiceDetails",
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>
