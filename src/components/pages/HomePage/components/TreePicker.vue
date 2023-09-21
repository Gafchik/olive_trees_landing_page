<script>
export default {
  name: "TreePicker"
}
</script>

<template>
  <div>
    <v-layout row wrap
              align-center
              justify-center
    >
      <v-flex xs12 sm12 md12>
        <div class="full-width-container text-center">
            <span class="header_text">
              {{ $t('pages.HomePage.tree_picker_title') }}
            </span>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag">
          <v-btn
              class="ml-12"
              outlined
              fab
              color="black"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div>
          <v-img
              contain
              height="300"
              :src="require('@/assets/images/olive_trees/personal_tree.png')"
          ></v-img>
        </div>
      </v-flex>
      <v-flex xs4 sm4 md4>
        <div class="flex-container-center-str-tag">
          <v-btn
              class="ml-12"
              outlined
              fab
              color="black"
          >
            <v-icon>mdi-minus</v-icon>
          </v-btn>
        </div>
      </v-flex>

    </v-layout>
  </div>
</template>

<style scoped>

</style>




