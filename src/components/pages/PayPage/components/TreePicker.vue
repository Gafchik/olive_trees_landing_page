<script>
import {mapActions, mapMutations} from "vuex";

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
      uuid: '',
    }
  },

  mounted() {
    if (!Object.keys(this.$route.params).length) {
      this.$router.push({path: 'PageNotFound'});
    }
    this.setUuid(this.$route.params.uuid)
    this.uuid = this.$route.params.uuid;
    this.promo = this.$route.query.promo ?? '';
    this.count_trees = this.$route.query.count_trees.length > 0
        ? parseInt(this.$route.query.count_trees)
        : 1;
  },
  methods: {
    ...mapMutations('payPage', {
      setUuid: 'setUuid'
    }),
    ...mapActions('payPage', {
      buyTreesMono: 'buyTreesMono'
    }),
    changeTree(isAdd) {
      isAdd ? this.count_trees++ : this.count_trees--
    },
    setReadyCountTree(count) {
      this.count_trees = count
    },
    buy() {
      let payload = {count_trees: this.count_trees,}
      if (this.promo.length > 0) {
        payload.promo_code = this.promo
      }
      this.buyTreesMono(payload).then((response) => {
        if (response.result) {
          window.location.href = response.pageUrl
        }
      })
    }
  }
}
</script>

<template>
  <div>
    <v-layout row wrap
              align-center
              justify-center
              class="mb-4"
    >
      <v-flex xs12 sm12 md12>
        <div class="flex-container-center-str-tag mb-12">
            <span class="header_text brown-text">
              {{ $t('pages.PayPage.tree_picker_title') }}
            </span>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap
              align-center
              justify-center
              class="mb-4"
    >
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag" style="float: right; margin-right: 20pt">
          <v-btn v-if="!!$vuetify.breakpoint.mdAndUp" style="background-color: #a3d64b; color: white"
                 :disabled="count_trees < MIN_COUNT_TREE"
                 fab
                 large
                 @click="changeTree(false)"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-btn v-else style="background-color: #a3d64b; color: white"
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
              :class="$vuetify.breakpoint.mdAndUp ? 'rounded-image-pc' : 'rounded-image-mobile'"
              :src="require('@/assets/images/olive_trees/wood.png')"
              alt="count_bg"
          >
          <div class="text-container">
          <span :class="$vuetify.breakpoint.mdAndUp ? 'wood-text-pc brown-text' : 'wood-text-mobile brown-text'">
            {{ count_trees }}
          </span>
          </div>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag" style="float: left; margin-left: 20pt">
          <v-btn v-if="!!$vuetify.breakpoint.mdAndUp" style="background-color: #a3d64b; color: white"
                 fab
                 large
                 color="grey"
                 @click="changeTree(true)"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn v-else style="background-color: #a3d64b; color: white"
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
              class="mb-4"
    >
      <v-flex xs12 sm12 md12>
        <div class="flex-container-center-str-tag mb-4">
            <span class="header_text brown-text">
              {{ $t('pages.PayPage.already_count_trees') }}
            </span>
        </div>
      </v-flex>
      <v-flex xs2 sm2 md2/>
      <v-flex xs8 sm8 md8 class="mb-4">
        <div :class="$vuetify.breakpoint.mdAndUp ? 'action-container-pc' : 'action-container-mobile'">
          <div class="mb-4" style="display: flex; justify-content: space-between;" v-if="!!$vuetify.breakpoint.mdAndUp">
            <v-btn style="background-color: #a3d64b; color: white"
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
          <div class="mb-4" style="display: flex; justify-content: space-between;" v-else>
            <v-btn style="background-color: #a3d64b; color: white"
                v-for="value in ALREADY_COUNT_TREE_ARRAY"
                :key="value"
                fab
                x-small
                color="grey"
                @click="setReadyCountTree(value)"
            >
              <span style="font-size: large; font-weight: bold;">{{ value }}</span>
            </v-btn>
          </div>
          <div>
            <v-text-field style="color: #a3d64b;"
                :label="$t('pages.PayPage.promo_code')"
                v-model="promo"
                filled
            ></v-text-field>
          </div>
          <v-btn block @click="buy()" class="mb-4 custom-btn" rounded style="background-color: #a3d64b; color: white">
            <span class="button-glow"></span>
            <span v-show="count_trees === 1">
              {{ $t('pages.PayPage.buy_1',{count: count_trees}) }}
            </span>
            <span v-show="count_trees > 1 && count_trees <= 4">
              {{ $t('pages.PayPage.buy_5',{count: count_trees}) }}
            </span>
            <span v-show="count_trees > 4">
              {{ $t('pages.PayPage.buy_many',{count: count_trees}) }}
            </span>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs2 sm2 md2/>
    </v-layout>
  </div>
</template>

<style scoped>
.action-container-pc {
  padding-left: 16%;
  padding-right: 16%;
}
.action-container-mobile {

}
.image-container {
  position: relative;
}

.rounded-image-mobile {
  border-radius: 50%;
  max-width: 100%; /* Уменьшили максимальную ширину */
  max-height: 100%; /* Уменьшили максимальную высоту */
  margin: 0 auto; /* Центрируем изображение горизонтально */
  display: block; /* Убираем межстрочный интервал */
}

.rounded-image-pc {
  border-radius: 50%;
  max-width: 60%; /* Уменьшили максимальную ширину */
  max-height: 100%; /* Уменьшили максимальную высоту */
  margin: 0 auto; /* Центрируем изображение горизонтально */
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
  font-size: 90pt;
  font-weight: bold;
}
</style>




