<template>
  <li>
    <div>
      <span>{{contact.firstName}}</span>
      <span>{{contact.lastName}}</span>
      <span>{{contact.email}}</span>
      <router-link tag="button" :to="'/about/' + contact.id">Edit</router-link>
      <button @click="deleteContact(contact.id)">Delete</button>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'contactItem',
  components: {}, 
  props: {
    contact: {}
  },
  methods: {
    ...mapActions(['deleteContact']),
    handleEdit(id) {
      console.dir(id)
    
      this.$router.push('./about')
    },
  }
// @click="handleEdit(contact.id)"
}
</script>

<style>

</style>
