<script>

import OurTarget from "@/components/pages/HomePage/components/OurTarget.vue";
import WithUsYouGet from "@/components/pages/HomePage/components/WithUsYouGet.vue";
import MobileLinks from "@/components/pages/PayPage/components/MobileLinks.vue";
import OlyCarousel from "@/components/pages/HomePage/components/OlyCarousel.vue";
import AboutUs from "@/components/pages/HomePage/components/AboutUs.vue";

export default {
  name: "HomePage",
  components: {AboutUs, OlyCarousel, MobileLinks, WithUsYouGet, OurTarget},

}
</script>

<template>
<div class="e-ukraine-fonts">
  <our-target/>
  <with-us-you-get/>
  <oly-carousel/>
  <about-us/>
  <mobile-links/>
</div>
</template>

<style scoped>

</style>