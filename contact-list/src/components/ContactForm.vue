<template>
    <div class="form-wrapper">
    <form class="form" @submit.prevent="handleSubmit">

      <div class="form__group">
        <label class="form__label" for="first">First name</label>
        <input class="form__input" @change="handleChangeName" v-bind:value="firstName" type="text" name="firstName" id="first" required>
      </div>

      <div class="form__group">
        <label class="form__label" for="last">Last name</label>
        <input class="form__input" @change="handleChangeLastName" v-bind:value="lastName"  type="text" name="lastName" id="last" required>
      </div>

      <div class="form__group">
        <label class="form__label" for="email">Email</label>
        <input class="form__input" @change="handleChangeEmail" v-bind:value="email" type="email" name="email" id="email" required>
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
    },
    handleInput() {
      $('input').focus(function(){
        $(this).parents('.form-group').addClass('focused');
      });

      $('input').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
          $(this).removeClass('filled');
          $(this).parents('.form-group').removeClass('focused');  
        } else {
          $(this).addClass('filled');
        }
      })  
    }
  }
}
</script>

<style lang="scss">
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

.focused .form-label {
  transform: translateY(-125%);
  font-size: .75em;
}

.form-input.filled {
  box-shadow: 0 2px 0 0 lightgreen;
}
</style>