<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MyHeader",
  computed: {
    ...mapGetters('app', {
      getLocale: 'getLocale',
    }),
    getLocaleArray() {
      return [
        {
          name: this.$t('app.locale.rus'),
          value: 'rus',
        },
        {
          name: this.$t('app.locale.ukr'),
          value: 'ukr',
        },
        {
          name: this.$t('app.locale.eng'),
          value: 'eng',
        },
        {
          name: this.$t('app.locale.geo'),
          value: 'geo',
        },
      ]
    }
  },
  methods: {
    ...mapActions('app', {
      setLocale: 'setLocale',
    }),
    changeLanguage(locale) {
      this.setLocale(locale.value);
    }
  },
}
</script>

<template>
  <div data-app>
    <v-app-bar class="bar-app" dark>

          <span class="image-text-container">
            <v-img :src="require('@/assets/images/olive_trees/favicon.png')"
                   height="50"
                   contain/>
            <span>Olive Trees</span>
          </span>

      <v-spacer></v-spacer>
      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-web</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="item in getLocaleArray" :key="item.value"
                       @click="changeLanguage(item)"
          >
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<style scoped>
.bar-app {
  background: black !important;
//opacity: 0.7;
}
.image-text-container {
  display: flex; /* Размещаем элементы внутри контейнера в одной строке */
  align-items: center; /* Вертикальное выравнивание по центру */
}

.image-text-container span {
  font-size: 16pt;
  margin-left: 6%;
  white-space: nowrap;
}
</style>