<!-- Callback.vue -->
<template>
  <v-container class="d-flex justify-center align-center" fill-height>
    <v-card class="pa-4" width="400">
      <v-card-title class="text-center">Processing...</v-card-title>
      <v-card-text>
        <!-- You can display a loading spinner here -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { getCsrfToken } from '../utils';

export default {
  async mounted() {
    const csrfToken = getCsrfToken()
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    if (code && state) {
      try {
        const response = await fetch('http://localhost:8000/auth/google/callback/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
          },
          body: JSON.stringify({ code, state }),
        });
        // Check if the response is OK and has JSON content
        if (response.ok) {
          const data = await response.json();
          // Handle the response from your server
          console.log('User authenticated', data);
          // store JWT in browser
          localStorage.setItem('JwtToken', JSON.stringify(data.data));
          // verify CSRF in cookie
          // const csrfToken = this.getCsrfToken()
          // console.log(csrfToken);
          this.$router.push('/dashboard');

        } else {
          console.error('Error during authentication: Response not OK', response.status);
          // Handle non-OK response
          this.$router.push('/login');
        }
      } catch (error) {
        console.error('Error during authentication', error);
      }
    } else {
      console.error('No code or state found in the URL');
    }
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
