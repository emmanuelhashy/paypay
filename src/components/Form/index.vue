<template>
  <div>
    <div
      class="row full-width text-capitalize text-base text-weight-regular q-pt-lg border-y"
    >
      <div class="col-12 col-md-5 q-mr-xl">
        <p class="text-gray">Item name</p>
      </div>
      <div class="gt-sm q-mr-md col-md-1">
        <p class="text-gray">Hours</p>
      </div>
      <div class="gt-sm q-mr-md col-md-1">
        <p class="text-gray">Rate/hr</p>
      </div>
      <div class="gt-sm q-mr-md col-md-1">
        <p class="text-gray">Tax</p>
      </div>
      <div class="gt-sm col-md-2">
        <p class="w-md text-gray">Line Total</p>
      </div>
      <div class="gt-sm col-md-1"></div>
    </div>
    <div class="row text-base text-weight-bold full-width text-black q-mt-xl">
      <div class="col-12 col-md-5 mr-xl">
        <input
          type="text"
          placeholder="Project name"
          name="title"
          class="q-pa-md full-width border-round-sm q-input q-mb-lg"
        />
        <input
          type="text"
          name="Description"
          placeholder="Description"
          class="q-pa-md full-width border-round-sm q-input"
        />
      </div>
      <div class="col-sm-2 col-12 q-mr-md col-md-1">
        <p class="lt-md q-mt-md">Hours</p>
        <!-- <input type="text" class="w-sm q-pa-md" /> -->
        <input
          type="text"
          class="w-sm q-px-sm q-py-md border-round-sm q-input"
        />
      </div>
      <div class="col-sm-2 col-12 q-mr-md col-md-1">
        <p class="lt-md q-mt-md">Rate/hr</p>
        <div class="w-sm q-input q-px-sm q-py-md border-round-sm flex">
          <span class="text-base text-gray">$</span>
          <input
            type="text"
            style="
              width: 80%;
              border: none;
              outline: none;
              background-color: transparent;
            "
            class=""
          />
        </div>
      </div>
      <div class="col-sm-2 col-12 q-mr-md col-md-1">
        <p class="lt-md q-mt-md">Tax</p>
        <div class="w-sm q-input q-px-sm q-py-md border-round-sm flex">
          <span class="text-base text-gray">$</span>
          <input
            type="text"
            style="
              width: 80%;
              border: none;
              outline: none;
              background-color: transparent;
            "
            class=""
          />
        </div>
      </div>
      <div class="col-sm-4 col-12 col-md-2">
        <p class="lt-md q-mt-md">Line Total</p>
        <div class="w-md q-input q-px-sm q-py-md border-round-sm flex">
          <span class="text-base text-gray">$</span>
          <input
            type="text"
            style="
              width: 80%;
              border: none;
              outline: none;
              background-color: transparent;
            "
            class=""
          />
        </div>
      </div>
      <div class="col-12 col-sm-1">
        <p class="lt-md q-mt-md"></p>
        <q-icon class="text-indigo" name="add_circle" size="xl" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "FormComponent",
});
</script>

<style lang="scss" scoped>
.q-input {
  background-color: $gray-light-1 !important;
  border: none;
  outline: none;
}
.mr-xl {
  margin-right: 3rem;
}
.w-sm {
  width: 90px;
}
.w-md {
  width: 150px;
}

.q-h-0 {
  height: 0;
}
.text-indigo {
  color: #4a15ea;
}
.border-round {
  border-radius: 20px;
}
.border-round-sm {
  border-radius: 10px;
  background-color: #4a15ea13;
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

@media only screen and (max-width: 768px) {
  .mr-xl {
    margin-right: 0rem;
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
