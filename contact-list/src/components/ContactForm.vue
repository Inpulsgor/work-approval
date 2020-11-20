<template>
    <div class="contact">
    <form class="contact__form" @submit.prevent="handleSubmit">
      <label>First name
        <input @change="handleChangeName" v-bind:value="firstName" type="text" name="firstName" required>
      </label>

      <label>Last name
        <input @change="handleChangeLastName" v-bind:value="lastName"  type="text" name="lastName" required>
      </label>

      <label>Email
        <input @change="handleChangeEmail" v-bind:value="email" type="email" name="email" required>
      </label>

      <button type="submit">Add</button>
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

    handleChangeName({ target }) {
      this.firstName = target.value;
    },
    handleChangeLastName({ target }) {
      this.lastName = target.value;
    },
    handleChangeEmail({ target }) {
      this.email = target.value;
    },
    handleSubmit(e) {
      this.addContact({
        id: v1(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      })
      this.firstName = "";
      this.lastName = "";
      this.email = "";
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