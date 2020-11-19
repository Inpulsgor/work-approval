import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: [
      { id: 1, firstName: "Mango", lastName: "Snow", email: "mango@gmail.com" },
      { id: 2, firstName: "Poly", lastName: "Smith", email: "poly@gmail.com" },
      { id: 3, firstName: "Ajax", lastName: "Sweet", email: "ajax@gmail.com" },
    ],
  },
  getters: {
    allContacts: (state) => state.contacts,
  },
  actions: {
    addContact({ commit }, contact) {
      commit("add_contact", contact);
    },
  },
  mutations: {
    add_contact(state, contact) {
      state.contacts.push(contact);
      console.log(contact);
    },
  },
  modules: {},
});