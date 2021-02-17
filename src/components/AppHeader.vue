<template>
  <div>
    <h1 class="teal--text text--darken-1">
      Event Dashboard
    </h1>
    <h3 class="text--secondary">{{ rangeDisplay || "Select a date range" }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { format } from "date-fns";

export default {
  computed: {
    ...mapState(["startDate", "endDate"]),

    rangeDisplay() {
      if (!this.startDate) return "";

      const start = format(new Date(this.startDate), "E MMM dd");
      const end = format(new Date(this.endDate), "E MMM dd");
      return `${start} - ${end}`;
    }
  }
};
</script>

<style></style>
