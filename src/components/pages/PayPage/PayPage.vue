<script>
import TreePicker from "@/components/pages/PayPage/components/TreePicker.vue";
import MobileLinks from "@/components/pages/PayPage/components/MobileLinks.vue";

export default {
  name: "PayPage",
  components: {MobileLinks, TreePicker}
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