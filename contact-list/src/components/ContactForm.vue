<template>
    <div class="form-wrapper">
    <form class="form" @submit.prevent="handleSubmit">

      <div class="form__group">
        <label class="form__label" for="name">Name</label>
        <input class="form__input" :class="{'filled': name !== ''}" @change="handleChangeName" v-bind:value="name" type="text" name="name" id="name" required>
      </div>

      <div class="form__group">
        <label class="form__label" for="email">Email</label>
        <input class="form__input" @change="handleChangeEmail" v-bind:value="email" type="email" name="email" id="email" required>
      </div>

      <div class="form__group">
        <label class="form__label" for="address">Address</label>
        <input class="form__input" @change="handleChangeAddress" v-bind:value="address"  type="text" name="address" id="address" required>
      </div>
      
      <button class="form__button" type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid'

export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
    }
  },
  methods: {
    ...mapActions(["addContact"]),

    handleChangeName({ target }) {
      this.name = target.value;
    },
     handleChangeEmail({ target }) {
      this.email = target.value;
    },
    handleChangeAddress({ target }) {
      this.address = target.value;
    },
    handleSubmit(e) {
      this.addContact({
        id: v1(),
        name: this.name,
        email: this.email,
        address: this.address,
      })
      this.name = "";
      this.email = "";
      this.address = "";
    },
  }
}
</script>

<style lang="scss" scoped>
  .form {
    &-wrapper {
      max-width: 30%;
      min-width: 300px;
      margin: 0 auto;  
      margin-bottom: 50px;
      padding: 50px 30px 50px 30px;
      border-radius: 10px;
      background-color: #fff; 
      box-shadow: 10px 10px 30px 0 rgba(170,178,197,.5);
    }

    &__group {
      position:relative;  

       &:last-of-type {
        margin-bottom: 20px;
      }

       & + .form-group {
        margin-top: 30px;
       }
    }

    &__label {
      position: absolute;
      left: 0;
      /* top: 10px; */
      color: #999;
      background-color: #fff;
      z-index: 10;
      transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    &__input {
      font-size: 16px;
      position: relative;
      padding: 12px 0px 5px 0;
      margin: 0 0 15px;
      width: 100%;
      height: 3rem;
      outline: none;
      border: none;
      border-bottom: 1px solid #9e9e9e;
      transition: box-shadow .3s, border .3s;

      &:focus {
        border-bottom: 1px solid #26a69a;
        box-shadow: 0 1px 0 0 #26a69a;
        transition: box-shadow .3s, border .3s;
      }
    }

    &__button {
      display: block;
      width: 40%;
      margin: 0 auto; 
    }
  }

.focused .form__label {
  transform: translateY(-125%);
  font-size: .75em;
}

.filled {
  box-shadow: 0 2px 0 0 lightgreen;
}

button {
    outline: 0;
    padding: 0 16px;
    user-select: none;
    overflow: hidden;
    font-size: 13px;
    line-height: 32.4px;
    letter-spacing: .5px;
    text-transform: uppercase;
    text-align: center;
    height: 32.4px;
    cursor: pointer;
    border: none;
    border-radius: 2px;
    color: #fff;
    background-color: #26a69a;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    transition: .3s ease-out;
  }

  button:hover {
    background-color: #2bbbad;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0,0.2);
    transition: .3s ease-out;
  }
</style>