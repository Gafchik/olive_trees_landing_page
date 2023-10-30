<script>
const trans_prefix = 'pages.HomePage.AboutUs'
export default {
  name: "AboutUs",
  data(){
    return {
      trans_prefix
    }
  },
  computed: {
    paragraphs() {
      return [
        {text: this.$t(`${this.trans_prefix}.texts.a1`)},
        {text: this.$t(`${this.trans_prefix}.texts.a2`)},
        {text: this.$t(`${this.trans_prefix}.texts.a3`)},
        {text: this.$t(`${this.trans_prefix}.texts.a4`)},
        {text: this.$t(`${this.trans_prefix}.texts.a5`)},
      ]
    },
    greenBorder(){
      return [
        {
          title: this.$t(`${this.trans_prefix}.greenBorder.a1.title`),
          text: this.$t(`${this.trans_prefix}.greenBorder.a1.text`),
        },
        {
          title: this.$t(`${this.trans_prefix}.greenBorder.a2.title`),
          text: this.$t(`${this.trans_prefix}.greenBorder.a2.text`),
        },
        {
          title: this.$t(`${this.trans_prefix}.greenBorder.a3.title`),
          text: this.$t(`${this.trans_prefix}.greenBorder.a3.text`),
        },
        {
          title: this.$t(`${this.trans_prefix}.greenBorder.a4.title`),
          text: this.$t(`${this.trans_prefix}.greenBorder.a4.text`),
        },
      ]
    }
  },
}
</script>

<template>
  <div class="e-ukraine-fonts">
    <v-layout
        wrap
        align-center
        justify-center
    >
      <v-flex xs12 sm12 md12>
        <div class="title-text">
          <span>{{$t(`${trans_prefix}.title`)}}</span>
        </div>
        <br>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <div v-for="(item, index) in paragraphs" :key="index">
          <span>{{item.text}}</span>
          <br>
          <br>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <div class="green-border">
          <div v-for="(item, index) in greenBorder" :key="index">
            <div class="title-text-green">
              <span>{{item.title}}</span>
            </div>
            <br>
            <div :class="$vuetify.breakpoint.mdAndUp ? 'text-pc' : 'text-mobile'">
              <span>{{item.text}}</span>
            </div>
            <br>
            <br>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
@import '@/css/fonts/e_ukraine.css';
span {
  font-family: 'e-UkraineHead-Bold', sans-serif !important;
}

.title-text{
  font-size: 30px;
}
.title-text-green{
  font-size: 30px;
  color: #479908;
}
.green-border {
  border-radius: 25px;
  border: 2px solid #479908; /* 2px толщина, solid стиль (непрерывная линия), #000 черный цвет рамки */
  padding: 20px; /* Внутренний отступ внутри рамки */
  margin: 10px; /* Внешний отступ вокруг рамки */
  word-wrap: break-word;
  min-height: 210px;
}

</style>