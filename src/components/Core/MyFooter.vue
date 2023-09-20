<script>
export default {
  name: "MyFooter",
  data(){
    return {
      icons: [
        {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/bio_cottege/'
        },
        {
          icon: 'mdi-youtube',
          link: 'https://www.youtube.com/@OliveFamilyClub'
        },
      ]
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
    >
      <v-card-text>
        <v-layout row wrap
                  align-center
                  justify-center
        >
          <v-flex xs12 sm4 md4 class="my-1">
            <div class="full-width-container text-center">
              <strong class="footer_header centered-span">{{$t('app.footer.email')}}</strong>
              <div>
                <span>olivetreesclub@gmail.com</span>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 sm4 md4>
            <div class="full-width-container text-center">
              <strong class="footer_header centered-span">{{$t('app.footer.contacts')}}</strong>
              <div>
                <span>+380635946256</span>
                <br/>
                <span>+995599427509</span>
              </div>
            </div>

          </v-flex>
          <v-flex xs12 sm4 md4>
            <div class="full-width-container text-center">
              <strong class="footer_header centered-span">{{$t('app.footer.social_network')}}</strong>
              <div>
                <v-btn
                    v-for="icon in icons"
                    :key="icon.icon"
                    :href="icon.link"
                    target="_blank"
                    icon
                    class="mx-4"
                >
                  <v-icon size="35">
                    {{ icon.icon }}
                  </v-icon>
                </v-btn>
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
</style>

