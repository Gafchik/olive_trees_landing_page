<script>
import MobileLinks from "@/components/pages/HomePage/components/MobileLinks.vue";
import TreePicker from "@/components/pages/HomePage/components/TreePicker.vue";

export default {
  name: "HomePage",
  components: {
    MobileLinks,TreePicker
  }
}
</script>

<template>
  <div>
    <div>
      <tree-picker/>
    </div>
    <div>
      <mobile-links/>
    </div>
  </div>
</template>

<style scoped>

</style>