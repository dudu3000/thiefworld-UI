<script setup>
import { ref } from 'vue'
import axios from 'axios'
defineProps({
  msg: String
})
let register;
register = await axios.put("http://localhost:3000", {
  email: "dudumanionut96@gmailc.om",
  username: "dudu3000",
  password: "Test"
},{
     headers: {
        }
}).catch(err => {
  console.log(err)
})
const count = ref(0)
</script>

<template>
{{register}}
  <h1>{{ msg }} TALUS</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
