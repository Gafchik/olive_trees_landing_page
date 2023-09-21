<script>
const MIN_COUNT_TREE = 2
export default {
  name: "TreePicker",
  data() {
    return {
      MIN_COUNT_TREE,
      count_trees: 1,
    }
  },
  methods: {
    changeTree(isAdd) {
      isAdd ? this.count_trees++ : this.count_trees--
    }
  }
}
</script>

<template>
  <div>
    <v-layout row wrap
              align-center
              justify-center
    >
      <v-flex xs12 sm12 md12>
        <div class="flex-container-center-str-tag">
            <span class="header_text">
              {{ $t('pages.HomePage.tree_picker_title') }}
            </span>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag" style="float: right">
          <v-btn
              fab
              small
              color="grey"
              @click="changeTree(true)"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
<!--        <div>-->
<!--          <v-img-->
<!--              contain-->
<!--              height="500"-->
<!--              :src="require('@/assets/images/olive_trees/wood.png')"-->
<!--          >-->
<!--            <span>sdvdsvsdv</span>-->
<!--          </v-img>-->
<!--        </div>-->
        <div class="image-container">
          <img
              class="rounded-image"
              height="500"
              :src="require('@/assets/images/olive_trees/wood.png')"
          >
          <div class="text-container">
          <span :class="$vuetify.breakpoint.mdAndUp ? 'wood-text-pc' : 'wood-text-mobile'">
            {{ count_trees }}
          </span>
          </div>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag" style="float: left">
          <v-btn
              :disabled="count_trees < MIN_COUNT_TREE"
              fab
              small
              color="grey"
              @click="changeTree(false)"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </div>
      </v-flex>

    </v-layout>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
}

.rounded-image {
  border-radius: 50%;
  max-width: 100%; /* Чтобы изображение не выходило за пределы родительского контейнера */
  height: auto; /* Автоматическое подстраивание высоты */
  display: block; /* Убираем межстрочный интервал */
}

.text-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.wood-text-mobile {
  font-size: 55pt;
  font-weight: bold;
}

.wood-text-pc {
  font-size: 183pt;
  font-weight: bold;
}
</style>




