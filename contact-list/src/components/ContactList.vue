<template>
  <div>
    <h2>Contacts:</h2>
    <ul>
        <ContactItem />
    </ul>
  </div>
</template>

<script>
import ContactItem from '../components/ContactItem';

export default {
    name: 'contactList',
    components: {
      ContactItem,
    },   

}
</script>

<style>

</style>