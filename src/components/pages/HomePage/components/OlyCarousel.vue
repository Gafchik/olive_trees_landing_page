<script>
const trans_prefix = 'pages.HomePage.OlyCarousel'
export default {
  name: "OlyCarousel",
  data(){
    return {
      trans_prefix,
      model: 0,
    }
  },
  computed: {
    carouselItems(){
      return [
        {
          link: require('@/assets/images/HomePage/carousel/1.jpeg'),
          is_photo: true,
        },
        {
          link: require('@/assets/images/HomePage/carousel/2.jpg'),
          is_photo: true,
        },
        {
          link: require('@/assets/images/HomePage/carousel/3.jpeg'),
          is_photo: true,
        },
        {
          link: require('@/assets/images/HomePage/carousel/4.jpg'),
          is_photo: true,
        },
        {
          link: require('@/assets/images/HomePage/carousel/5.jpg'),
          is_photo: true,
        },
        {
          link: '/video/HomePage/carousel/6.MP4',
          is_photo: false,
        }
      ]
    }
  }
}
</script>

<template>
<div>
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
      <div class="sub-title-text">
        <span>{{$t(`${trans_prefix}.sub_title`)}}</span>
      </div>
      <br>
    </v-flex>
  </v-layout>
  <div :class="$vuetify.breakpoint.mdAndUp ? 'mx-auto col-8' : 'mx-auto col-11'">
    <v-carousel
        v-model="model"
        hide-delimiters
        :height="$vuetify.breakpoint.mdAndUp ? '500' : '300'"
    >
      <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
        <v-img
            :class="$vuetify.breakpoint.mdAndUp ? 'rounded-image-pc' : 'rounded-image-mobile'"
            v-if="item.is_photo"
            alt="img"
            :src="item.link"
        />
        <video v-else
            controls
            preload="auto"
            class="carousel-video"
        >
          <source :src="item.link" type="video/mp4" />
        </video>
      </v-carousel-item>
    </v-carousel>
  </div>
</div>
</template>

<style scoped>
.title-text{
  font-size: 30px;
}
.sub-title-text{
  font-size: 25px;
}
.rounded-image-mobile {
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.rounded-image-pc {
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.carousel-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Обрезать видео и подогнать его под размер контейнера */
}
</style>