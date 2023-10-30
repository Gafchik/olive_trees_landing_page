<script>
export default {
  name: "MobileLinks"
}
</script>

<template>
  <div>
    <div class="flex-container-center-str-tag mb-4">
      <span class="centered-span header_text brown-text">
        {{$t('pages.PayPage.store_title')}}
      </span>
    </div>
    <v-layout row wrap
              align-center
              justify-center
    >
      <v-flex xs12 sm6 md6 >
        <div>
          <a
              href="https://play.google.com/store/apps/details?id=com.crustbrns.biodeposit_mobile"
              target="_blank"
          >
            <v-img :src="require('@/assets/images/google/google-play-badge.png')"
                   height="125"
                   contain
                   alt="Download on Google Play"/>
          </a>
        </div>

      </v-flex>
      <v-flex xs12 sm6 md6 class="justify-center align-center">
        <div>
          <a
              href="https://apps.apple.com/ua/app/olivetrees/id6449684717"
              target="_blank"
          >
            <v-img :src="require('@/assets/images/appstore/appstore-icon.png')"
                   height="125"
                   contain
                   alt="Download on the App Store"/>
          </a>
        </div>

      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>

</style>