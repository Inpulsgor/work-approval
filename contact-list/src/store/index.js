import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem("contacts") || "[]"),
    confirmed: false,
  },

  getters: {
    allContacts: (state) => state.contacts,
  },

  actions: {
    addContact({ commit }, contact) {
      commit("addContact", contact);
    },
    deleteContact({ commit }, id) {
      commit("deleteContact", id);
    },
  },

  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
    deleteContact(state, id) {
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },
  },

  modules: {},
});
