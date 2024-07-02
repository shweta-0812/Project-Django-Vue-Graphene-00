<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card class="pa-5" max-width="400">
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-btn color="primary" @click="loginWithGoogle">Login with Google</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>

import { generateSecureRandomString } from '../utils';
export default {
  name: "Login",

  data() {
    return {
      randomString: "",
      // email: "",
      // password: "",
      // rules: {
      //   required: (value) => !!value || "Required.",
      //   email: (value) => {
      //     const pattern =
      //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //     return pattern.test(value) || "Invalid e-mail.";
      //   },
      //   min: (value) => value.length >= 6 || "Min 6 characters",
      // },
    }
  },

  methods: {
    // async loginWithEmail() {
    //   try {
    //     const { data } = await this.login({
    //       email: this.email,
    //       password: this.password
    //     })
    //     console.log('Logged in with token', data.login.token)
    //   } catch (error) {
    //     console.error('Error logging in', error)
    //   }
    // },
    loginWithGoogle() {
      const stateToken = this.randomString;
      // const redirectURI = `${window.location.origin}/auth/google/callback`
      const redirectURI = `http://localhost:5173/auth/google/callback`
      // console.log(import.meta.env.DEV) - returns a boolean flag for which env it is using
      const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID
      // set URL for redirecting to Google
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${redirectURI}&response_type=code&scope=profile email&state=${stateToken}`;
      // console.log(googleAuthUrl)
      window.location.href = googleAuthUrl;
    },

  },
  mounted() {
    this.randomString = (generateSecureRandomString(16));
  },
};
</script>

<style>
.fill-height {
  min-height: 100vh;
}
</style>