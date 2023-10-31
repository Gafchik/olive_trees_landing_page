<script>
import MyFooter from "./components/Core/MyFooter.vue";
import MyHeader from "./components/Core/MyHeader.vue";

export default {
  components: {
    MyFooter, MyHeader,
  },
}
</script>
<template>
  <v-app>
    <div id="app">
      <my-header/>
      <v-main>
        <v-container fluid class="bg">
          <router-view/>
        </v-container>
      </v-main>
      <my-footer/>
    </div>
  </v-app>

</template>
<style>
@import '@/css/fonts/hack.css';
.mb-4 {
  margin-bottom: 3%;
}
.bg {
  background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('@/assets/images/olive_trees/adaptive-icon.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
}

.full-width-container {
  width: 100%; /* Занимает всю ширину экрана */
  text-align: center; /* Центрирует содержимое по горизонтали */
}

.centered-span {
  display: inline-block; /* Делает элемент блочным, чтобы можно было применить вертикальное выравнивание */
  vertical-align: middle; /* Центрирует элемент по вертикали */
}

.header_text {
  font-size: 20pt;
  font-weight: bold;
}

.flex-container-center-str-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%; /* Фиксированная высота для центрирования по вертикали */
}

.flex-container-align-center {
  display: flex;
  align-items: center;
  height: 100%; /* Фиксированная высота для центрирования по вертикали */
}
.brown-text {
  font-family: 'hack-bold', sans-serif;
  color: #413e1e
}
span {
  font-family: 'hack-bold', sans-serif;
}
</style>