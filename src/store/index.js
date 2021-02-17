import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY = process.env.VUE_APP_SEATGEEK_ID;
const getSeatgeekUrl = (type, dateRange) => {
  return `https://api.seatgeek.com/2/events?taxonomies.name=${type}&client_id=${API_KEY}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local.gte=${dateRange.startDate}&datetime_local.lte=${dateRange.endDate}`;
};

export default new Vuex.Store({
  state: {
    startDate: null,
    endDate: null,
    concerts: {},
    sporting: {},
    theater: {},
  },
  mutations: {
    setDateSelected(state, payload) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
    setSportingEvents(state, payload) {
      state.sporting = payload;
    },
    setConcertEvents(state, payload) {
      state.concerts = payload;
    },
    setTheaterEvents(state, payload) {
      state.theater = payload;
    },
  },
  actions: {
    async getEventsForDateRange({ commit, dispatch }, range) {
      commit("setDateSelected", range);
      dispatch("getSportingEvents", range);
      dispatch("getConcertEvents", range);
      dispatch("getTheaterEvents", range);
    },

    async getSportingEvents({ commit }, range) {
      const url = getSeatgeekUrl("sports", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setSportingEvents", data);
    },

    async getConcertEvents({ commit }, range) {
      const url = getSeatgeekUrl("concert", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setConcertEvents", data);
    },

    async getTheaterEvents({ commit }, range) {
      const url = getSeatgeekUrl("theater", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setTheaterEvents", data);
    },
  },

  getters: {
    topSporting(state) {
      if (!state.sporting.events) {
        return [];
      }

      return state.sporting.events.slice(0, 3);
    },

    topConcerts(state) {
      if (!state.concerts.events) {
        return [];
      }

      return state.concerts.events.slice(0, 3);
    },

    topTheater(state) {
      if (!state.theater.events) {
        return [];
      }

      return state.theater.events.slice(0, 3);
    },
  },

  modules: {},
});
