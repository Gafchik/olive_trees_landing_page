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
      <v-card-title class="teal">
        <strong class="subheading">{{$t('pages.HomePage.test')}}</strong>

        <v-spacer></v-spacer>

        <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            class="mx-4"
            dark
            icon
            :href="icon.link"
            target="_blank"
        >
          <v-icon size="24px">
            {{ icon.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

