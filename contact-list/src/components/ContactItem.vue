<template>
  <li>
    <div>
      <span>{{contact.firstName}}</span>
      <span>{{contact.lastName}}</span>
      <span>{{contact.email}}</span>
      <button>Edit</button>
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
    ...mapActions(['deleteContact'])
  }
}
</script>

<style>

</style>