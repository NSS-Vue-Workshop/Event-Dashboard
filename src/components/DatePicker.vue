<template>
  <v-date-picker
    v-model="searchRange"
    range
    @change="selectDate"
    elevation="2"
    full-width
    color="teal"
    prev-icon="mdi-skip-previous"
    next-icon="mdi-skip-next"
  ></v-date-picker>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      searchRange: []
    };
  },

  methods: {
    ...mapActions(["getEventsForDateRange"]),
    ...mapMutations(["setDateSelected"]),

    selectDate() {
      const range = {
        startDate: this.searchRange[0],
        endDate: this.searchRange[1]
      };
      this.getEventsForDateRange(range);
    }
  }
};
</script>

<style></style>
