<template>
  <v-container>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <v-btn @click="increment">
      Increment
    </v-btn>
    <v-btn :to="{ name: 'Login' }" link>
      Go to Login Page
    </v-btn>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('counter', ['count']),
    ...mapGetters('counter', ['doubleCount'])
  },
  methods: {
    ...mapActions('counter', ['increment'])
  }
}
</script>
