<!-- Callback.vue -->
<template>
  <v-container class="d-flex justify-center align-center" fill-height>
    <v-card class="pa-4" width="400">
      <v-card-title class="text-center">Nothing to Show...</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
// import { getCsrfToken } from '../utils';

export default {
  mounted() {
    // // verify if CSRF token available here
    // const csrfToken = getCsrfToken()
    // console.log(csrfToken);
  },
  methods: {
  },
};
</script>


<style>
html,
body {
  height: 100%;
  margin: 0;
  font-family: Roboto, sans-serif;
}
</style>
