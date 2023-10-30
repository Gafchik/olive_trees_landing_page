<script>
const trans_prefix = 'pages.HomePage.WithUsYouGet'
export default {
  name: "WithUsYouGet",
  data(){
    return {
      trans_prefix
    }
  },
  computed: {
    items(){
      return [
        {
          title: this.$t(`${this.trans_prefix}.items.opportunity.title`),
          text: this.$t(`${this.trans_prefix}.items.opportunity.text`),
        },
        {
          title: this.$t(`${this.trans_prefix}.items.tourism.title`),
          text: this.$t(`${this.trans_prefix}.items.tourism.text`),
        },
        {
          title: this.$t(`${this.trans_prefix}.items.old_tree.title`),
          text: this.$t(`${this.trans_prefix}.items.old_tree.text`),
        },
        {
          title: this.$t(`${this.trans_prefix}.items.buy.title`),
          text: this.$t(`${this.trans_prefix}.items.buy.text`),
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container e-ukraine-fonts">
    <v-layout row wrap
              align-center
              justify-center
    >
      <v-flex xs12 sm12 md12>
        <div class="flex-container-center-str-tag" style="margin-bottom: 50px">
            <span class="header_text title-text">
              {{$t(`${trans_prefix}.title`)}}
            </span>
        </div>
      </v-flex>
    </v-layout>
    <div class="flex-container">
      <v-flex xs12 sm12 md3 v-for="(item, index) in items" :key="index" class="flex-item">
        <div class="card-title">
          <span>{{item.title}}</span>
        </div>
        <div :class="$vuetify.breakpoint.mdAndUp ? 'text-pc' : 'text-mobile'">
          <span>{{item.text}}</span>
        </div>
      </v-flex>
    </div>
  </div>
</template>

<style scoped>
@import '@/css/fonts/e_ukraine.css';
span {
  font-family: 'e-UkraineHead-Bold', sans-serif !important;
}
.container {
  margin-top: 30px;
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; /* Выравнивание по вертикали по центру */
}
.flex-item {
  border-radius: 25px;
  border: 2px solid #479908; /* 2px толщина, solid стиль (непрерывная линия), #000 черный цвет рамки */
  padding: 20px; /* Внутренний отступ внутри рамки */
  margin: 10px; /* Внешний отступ вокруг рамки */
  word-wrap: break-word;
  min-height: 210px;
}
.title-text{
  font-size: 30px;
}
.card-title{
  font-size: 25px;
}
.text-mobile{
  font-size: 25px;
}
.text-pc{
  font-size: 15px;
}
</style>