<script>
import MyFooter from "./components/Core/MyFooter.vue";
import MyHeader from "./components/Core/MyHeader.vue";

export default {
  components: {
    MyFooter,MyHeader,
  },
}
</script>
<template>
  <div id="app">
    <my-header/>
    <router-view/>
    <my-footer/>
  </div>
</template>
