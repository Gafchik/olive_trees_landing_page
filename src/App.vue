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
    <router-view class="bg"/>
    <my-footer/>
  </div>
</template>
<style>
.bg {
  background-image: url('@/assets/images/olive_trees/adaptive-icon.png');
  background-size: cover;
  background-repeat:no-repeat;
  background-position:center center;
  background-attachment: fixed;
  height: 100%;
}
.full-width-container {
  width: 100%; /* Занимает всю ширину экрана */
  text-align: center; /* Центрирует содержимое по горизонтали */
}

.centered-span {
  display: inline-block; /* Делает элемент блочным, чтобы можно было применить вертикальное выравнивание */
  vertical-align: middle; /* Центрирует элемент по вертикали */
}
</style>