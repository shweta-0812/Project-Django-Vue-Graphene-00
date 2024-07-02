<template>
  <div>
    <v-form ref="form">
      <v-text-field
          v-model="taskId"
          type="number"
          label="Task Id"
      ></v-text-field>
      <v-text-field
          v-model="taskPrompt"
          label="Task Prompt"
          type="text"
      ></v-text-field>
      <v-btn type="submit" color="primary" @click="createTask()">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'


export default {
  name: 'Test',

  data () {
    return {
      taskId: -1,
      taskPrompt: ''
    }
  },

  setup () {
    const taskId = ref('')
    const taskPrompt = ref('')

    const { mutate: createTask } = useMutation(gql`
    mutation SampleTaskCreate($taskId: Int, $taskPrompt: String) {
      sampleTaskCreate(taskId: $taskId, taskPrompt: $taskPrompt) {
        sampleTaskCreate {
          taskId
        },
          ok
      }
    }
  `, () => ({
      variables: {
        // taskId: taskId.value,
        // taskPrompt: taskPrompt.value
        taskId: 1,
        taskPrompt: "Hello"
      },
    }))

    return {
      taskId,
      taskPrompt,
      createTask
    }

  },

  methods: {}
}
</script>