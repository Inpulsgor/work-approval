<template>
  <li>
    <div>
      <span>{{contact.firstName}}</span>
      <span>{{contact.lastName}}</span>
      <span>{{contact.email}}</span>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'contactItem',
  components: {}, 
  props: {
    contact: {

    }
  }
}
</script>

<style>

</style>