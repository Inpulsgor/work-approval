<template>
  <div>
    <div v-if="contact">
      {{ contact.email }}
    </div>
    <p v-else>Contact not found :(</p>
  </div>
</template>

<script>
export default {
  computed: {
    contact() {
      return this.$store.getters.contactInfo(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>