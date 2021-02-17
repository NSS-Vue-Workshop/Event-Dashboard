<template>
  <v-app id="app">
    <v-main>
      <v-container class="pt-12">
        <app-header class="mb-5"></app-header>
        <v-row>
          <v-col sm="12" lg="6" xl="5">
            <v-row class="mb-6">
              <v-col>
                <sports-count-card></sports-count-card>
              </v-col>
              <v-col>
                <theater-count-card></theater-count-card>
              </v-col>
              <v-col>
                <concerts-count-card></concerts-count-card>
              </v-col>
            </v-row>
            <date-picker class="mb-5"></date-picker>
          </v-col>
          <v-col sm="12" lg="6" xl="7">
            <sports-table class="mb-6"></sports-table>
            <theater-table class="mb-6"></theater-table>
            <concert-table class="mb-6"></concert-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker.vue";
import AppHeader from "./components/AppHeader.vue";
import SportsCountCard from "./components/SportsCountCard.vue";
import TheaterCountCard from "./components/TheaterCountCard.vue";
import ConcertsCountCard from "./components/ConcertsCountCard.vue";
import SportsTable from "./components/SportsTable.vue";
import TheaterTable from "./components/TheaterTable.vue";
import ConcertTable from "./components/ConcertTable.vue";
export default {
  name: "App",

  components: {
    DatePicker,
    AppHeader,
    SportsCountCard,
    TheaterCountCard,
    ConcertsCountCard,
    SportsTable,
    TheaterTable,
    ConcertTable
  },

  data: () => ({
    //
  })
};
</script>

<style>
#app {
  background: #f0f0f0 !important;
}
</style>
