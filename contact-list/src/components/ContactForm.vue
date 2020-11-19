<template>
    <div class="contact">
    <form class="contact__form">

      <label>First name
        <input v-model="firstName" type="text" name="firstName" required>
      </label>

      <label>Last name
        <input v-model="lastName" type="text" name="lastName" required>
      </label>

      <label>Email
        <input v-model="email" type="email" name="email" required>
      </label>

      <button @click="createContact" type="submit">Add</button>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
    }
  },
  methods: {
    ...mapActions(["addContact"]),
    createContact(e) {
      e.preventDefault();
      this.addContact({
        id: v1(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      })
    }
  }
}
</script>

<style lang="scss">
  .contact {
    padding: 20px;
    border-radius: 10px;
    background-color: #fff; 
    box-shadow: 10px 10px 30px 0 rgba(170,178,197,.5);

     &__form {
    display: flex;
    flex-direction: column;
  }
  }
</style>