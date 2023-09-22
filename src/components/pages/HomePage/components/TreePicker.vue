<script>
const MIN_COUNT_TREE = 2
const ALREADY_COUNT_TREE_ARRAY = [1, 5, 10, 25, 50];
export default {
  name: "TreePicker",
  data() {
    return {
      MIN_COUNT_TREE,
      ALREADY_COUNT_TREE_ARRAY,
      count_trees: 1,
      promo: '',
      uuid: null,
    }
  },
  mounted() {
    if(!Object.keys(this.$route.params).length){
      this.$router.push({ path: 'PageNotFound'});

    }

    this.uuid = this.$route.params.uuid;
    this.promo = this.$route.query.promo ?? '';
    this.count_trees = this.$route.query.count_trees ?? '';
  },
  methods: {
    changeTree(isAdd) {
      isAdd ? this.count_trees++ : this.count_trees--
    },
    setReadyCountTree(count) {
      this.count_trees = count
    },
    buy() {
      alert('Пошел нахуй, Не готово !)')
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
        <div class="flex-container-center-str-tag mb-12">
            <span class="header_text">
              {{ $t('pages.HomePage.tree_picker_title') }}
            </span>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag" style="float: right; margin-right: 20pt">
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
      <v-flex xs4 sm4 md4>
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
        <div class="flex-container-center-str-tag" style="float: left; margin-left: 20pt">
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
    </v-layout>
    <v-layout row wrap
              align-center
              justify-center
    >
      <v-flex xs12 sm12 md12>
        <div class="flex-container-center-str-tag">
            <span class="header_text">
              {{ $t('pages.HomePage.already_count_trees') }}
            </span>
        </div>
      </v-flex>
      <v-flex xs2 sm2 md2/>
      <v-flex xs8 sm8 md8>
        <div style="display: flex; justify-content: space-between;" v-if="!!$vuetify.breakpoint.mdAndUp">
          <v-btn
              v-for="value in ALREADY_COUNT_TREE_ARRAY"
              :key="value"
              fab
              large
              color="grey"
              @click="setReadyCountTree(value)"

          >
            <span style="font-size: large; font-weight: bold;">{{ value }}</span>
          </v-btn>
        </div>
        <div style="display: flex; justify-content: space-between;" v-else>
          <v-btn
              v-for="value in ALREADY_COUNT_TREE_ARRAY"
              :key="value"
              fab
              small
              color="grey"
              @click="setReadyCountTree(value)"
          >
            <span style="font-size: large; font-weight: bold;">{{ value }}</span>
          </v-btn>
        </div>
        <div>
          <v-text-field
              :label="$t('pages.HomePage.promo_code')"
              v-model="promo"
              outlined
          ></v-text-field>
        </div>
        <v-btn block @click="buy()" >
            <span>
              {{ $t('pages.HomePage.buy_count', {count: count_trees}) }}
            </span>
          <br>
            <span v-show="count_trees === 1">
              {{ $t('pages.HomePage.buy_1') }}
            </span>
          <span v-show="count_trees > 1 && count_trees <= 4">
              {{ $t('pages.HomePage.buy_5') }}
            </span>
          <span v-show="count_trees > 4">
              {{ $t('pages.HomePage.buy_many') }}
            </span>
        </v-btn>
      </v-flex>
      <v-flex xs2 sm2 md2/>
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




