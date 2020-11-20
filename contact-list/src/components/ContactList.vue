<template>
  <div class="table-wrapper">
    <table v-if="allContacts.length">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(contact, index) of allContacts" :key="contact.id">
              <td data-label="#">{{index + 1}}</td>
              <td data-label="Name">{{contact.name}}</td>
              <td data-label="Email">{{contact.email}}</td>
              <td data-label="Address">{{contact.address}}</td>
              <td>
                <router-link tag="button" :to="'/about/' + contact.id">details</router-link>
              </td>
              <td>
                <button @click="deleteContact(contact.id)">Delete</button>
              </td>
            </tr>
      </tbody>
    </table>
    <p v-else>Contacts list empty :(</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'contactList',
    components: {},
    methods: {
      ...mapActions(['deleteContact']),
    },
    computed: {
      ...mapGetters(['allContacts'])
    },
}
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  border-bottom: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  /* text-transform: uppercase; */
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
   table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
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