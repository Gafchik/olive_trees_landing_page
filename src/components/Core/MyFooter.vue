<script>
export default {
  name: "MyFooter",
  data(){
    return {

    }
  },
}
</script>

<template>
  <v-footer
      dark
      padless
  >
    <v-card
        class="flex"
        flat
        tile
        style="margin-top: 1%"
    >
      <v-card-text class="mt-4">
        <v-layout row wrap
                  align-center
                  justify-center
        >
          <v-flex xs12 sm6 md6>
            <div class="full-width-container text-center">
              <strong class="footer_header centered-span mb-4">{{$t('app.footer.email')}}</strong>
              <div class="mb-4">
                <span>olivetreesclub@gmail.com</span>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <div class="full-width-container text-center">
              <span class="footer_header centered-span mb-4">{{$t('app.footer.contacts')}}</span>
              <div class="mb-4">
                <span>+380635946256</span>
                <br/>
                <span>+995599427509</span>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<style scoped>
.footer_header {
  font-size: 20pt;
}
.icon-margin {
  margin-left: 2%;
  margin-right: 2%;
}
</style>

