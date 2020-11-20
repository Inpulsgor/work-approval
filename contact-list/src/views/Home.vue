<template>
<div>
  <ContactForm/>
  <ContactList/>
</div>
</template>

<script>
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';

export default {
  name: 'home',
  components: {
    ContactForm,
    ContactList,
  }
}
</script>

<style lang="scss" scoped>
</style>