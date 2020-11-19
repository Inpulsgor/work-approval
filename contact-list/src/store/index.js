import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [],
    confirmed: false,
  },
  getters: {
    allContacts: (state) => state.contacts,
  },
  actions: {
    addContact({ commit }, contact) {
      commit("add_contact", contact);
    },
    deleteContact({ commit }, id) {
      commit("delete_contact", id);
    },
  },
  mutations: {
    add_contact(state, contact) {
      state.contacts.push(contact);
    },
    delete_contact(state, id) {
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
  },
  modules: {},
});
