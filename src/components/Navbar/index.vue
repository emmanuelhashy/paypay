<template>
  <div>
    <q-header class="bg-white" elevated>
      <div class="px-xl flex items-center centralise">
        <div class="q-py-lg">
          <p class="text-h4 logo">Paypay</p>
        </div>

        <div class="flex gt-sm">
          <router-link
            to="dashboard"
            flat
            dense
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="dashboard"
              class="q-mr-md-sm text-gray q-mr-lg-md"
              size="sm"
            />
            <p class="text-h6 text-weight-regular">Dashboard</p>
          </router-link>

          <router-link
            to="invoice"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="description"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-h6 text-weight-regular">Invoices</p>
          </router-link>

          <router-link
            to="wallet"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="account_balance_wallet"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-h6 text-weight-regular">Wallet</p>
          </router-link>

          <router-link
            to="activity"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="assessment"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-h6 text-weight-regular">Activity</p>
          </router-link>

          <router-link
            to="help"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="phone"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-h6 text-weight-regular">Help</p>
          </router-link>
        </div>
        <q-space class="lt-md" />
        <div class="lt-md">
          <q-btn
            flat
            @click="rightDrawerOpen = !rightDrawerOpen"
            round
            dense
            icon="menu"
            text-color="black"
            aria-label="Menu"
          />
        </div>
      </div>
    </q-header>
    <q-drawer
      side="right"
      v-model="rightDrawerOpen"
      bordered
      :width="200"
      :breakpoint="500"
      class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-md text-base">
          <router-link
            to="dashboard"
            flat
            dense
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="dashboard"
              class="q-mr-md-sm text-gray q-mr-lg-md"
              size="sm"
            />
            <p class="text-weight-regular">Dashboard</p>
          </router-link>

          <router-link
            to="invoice"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="description"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-weight-regular">Invoices</p>
          </router-link>

          <router-link
            to="wallet"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="account_balance_wallet"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-weight-regular">Wallet</p>
          </router-link>

          <router-link
            to="activity"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="assessment"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-weight-regular">Activity</p>
          </router-link>

          <router-link
            to="help"
            class="q-ml-md-lg q-ml-lg-xl link flex items-center q-py-lg"
          >
            <q-icon
              name="phone"
              size="sm"
              class="q-mr-md-sm q-mr-lg-md text-gray"
            />
            <p class="text-weight-regular">Help</p>
          </router-link>
        </div>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<style scoped lang="scss">
a {
  text-decoration: none;
}
.px-xl {
  padding-left: 6rem;
  padding-right: 6rem;
}
.centralise {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
p {
  padding: 0px;
  margin: 0px;
}
.logo {
  color: $primary;
}
.link {
  border-bottom: 2px solid transparent;
  cursor: pointer;
  color: $dark;
}
.link:hover,
.link.active {
  border-bottom: 2px solid $primary-1;
  color: $primary;

  i {
    color: $primary;
  }
}

@media only screen and (max-width: 768px) {
  .px-xl {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
</style>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { createNamespacedHelpers } from "vuex";

const { mapActions, mapGetters } = createNamespacedHelpers("invoice");

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      rightDrawerOpen: false,
    };
  },
});
</script>
