<script>
const trans_prefix = 'pages.HomePage.OurTarget'
export default {
  name: "OurTarget",
  data(){
    return {
      trans_prefix
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
    <v-flex xs12 sm12 md6>
      <div class="title-text">
        <span>{{$t(`${trans_prefix}.title`)}}</span>
      </div>
      <br>
      <div :class="$vuetify.breakpoint.mdAndUp ? 'text-pc' : 'text-mobile'">
        <span>{{$t(`${trans_prefix}.text`)}}</span>
      </div>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <div class="px-2 py-2">
        <img
            alt="img"
            :class="$vuetify.breakpoint.mdAndUp ? 'rounded-image-pc' : 'rounded-image-mobile'"
            :src="require('@/assets/images/HomePage/OurTarget/img1.jpg')"
        >
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
.text-mobile{
  font-size: 25px;
}
.text-pc{
  font-size: 35px;
  padding-right: 5px;
  padding-left: 5px;
}
.rounded-image-mobile {
  border-radius: 25px;
  max-width: 100%; /* Уменьшили максимальную ширину */
  max-height: 100%; /* Уменьшили максимальную высоту */
}

.rounded-image-pc {
  border-radius: 25px;
  max-width: 90%; /* Уменьшили максимальную ширину */
  max-height: 100%; /* Уменьшили максимальную высоту */
}
</style>