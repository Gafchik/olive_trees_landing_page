<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MyFooter",
  data(){
    return {

    }
  },
  mounted() {
    this.getContactsAsync()
  },
  computed: {
    ...mapGetters('app',{
      contacts: 'contacts',
    })
  },
  methods: {
    ...mapActions('app',{
      getContactsAsync: 'getContactsAsync',
    })
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
                <template v-for="(email,key) in contacts.emails ?? []">
                  <span v-bind:key="key+'email'">{{email}} <br/></span>
                </template>
              </div>
            </div>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <div class="full-width-container text-center">
              <span class="footer_header centered-span mb-4">{{$t('app.footer.contacts')}}</span>
              <div class="mb-4">
                <template v-for="(phone,key) in contacts.phones ?? []">
                  <span v-bind:key="key+'phone'">{{phone}} <br/></span>
                </template>
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

