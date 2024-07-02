<template>
  <v-container>
    <v-row>
      <v-col>
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error: {{ error.message }}</div>
        <div v-if="result">
          <ul v-if="result && result.sampleUserDetail">
            <li>
              {{ result.sampleUserDetail.id }} {{ result.sampleUserDetail.email }}
            </li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default {
  name: 'TestConnection',
  setup() {
    // Define the query using gql
    const TEST_QUERY = gql`
      query SampleUserDetail {
          sampleUserDetail {
          id
          email
          firstName
        }
      }
    `

    // Execute the query using useQuery
    const { result, loading, error } = useQuery(TEST_QUERY)
    // watch(result, value => {
    //   console.log(value)
    // })

    // Return the query result, loading, and error states
    return {
      result,
      loading,
      error
    }
  }
}
</script>

<style scoped>
/* Add any styles needed for your component */
</style>
