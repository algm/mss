<template>
  <div class="app-base">
    <div v-if="!authenticated" class="fill-content md-layout">
      <Login></Login>
    </div>

    <div v-if="authenticated" class="fill-content md-layout">
      <router-view></router-view>
    </div>
  </div>
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
