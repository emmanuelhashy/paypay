<template>
  <q-layout class="bg-gray-light" view="lHh Lpr lFf">
    <div class="main">
      <Navbar />
      <!-- <Mainsection/> -->
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
.main {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.bg-gray-light {
  background-color: $gray-light-1;
}
</style>

<script>
import { defineComponent, ref } from "vue";
import Navbar from "components/Navbar/index.vue";

export default defineComponent({
  name: "MainLayout",
  components: { Navbar },
});
</script>
