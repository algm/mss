<template>
  <md-layout>
    <div v-if="!authenticated">
      <Login></Login>
    </div>

    <div v-if="authenticated">
      <router-view></router-view>
    </div>
  </md-layout>
</template>

<script>
  import Login from '../components/Login.vue';
  import {mapState} from 'vuex';

  export default {
    computed: mapState(['authenticated']),

    components: {
      Login: Login
    }
  }
</script>
