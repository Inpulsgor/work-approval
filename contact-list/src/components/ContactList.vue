<template>
  <div>
    <h2>Contacts:</h2>
    <ul v-for="contact of allContacts" :key="contact.id">
        <ContactItem :contact="contact" />
    </ul>
  </div>
</template>

<script>
import ContactItem from '../components/ContactItem';
import { mapGetters } from 'vuex'

export default {
    name: 'contactList',
    components: {
      ContactItem,
    },
    computed: {
      ...mapGetters(['allContacts'])
    }   

}
</script>

<style>

</style>