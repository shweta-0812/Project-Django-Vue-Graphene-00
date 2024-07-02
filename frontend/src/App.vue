<template>
  <div id="inside-app">
    <header>
      <!-- Your header content -->
      <h1>Dream Walk</h1>
    </header>

    <main>
      <router-view></router-view> <!-- This renders the current route's component -->
    </main>

    <footer>
      <!-- Your footer content -->
      <p>&copy; 2024 My Vue App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Welcome to My Vue App'
    }
  }
  // Additional component options can be defined here
}
</script>

<style>
/* Global styles for the entire application */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#inside-app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
}

main {
  flex: 1; /* Takes remaining space */
  padding: 20px;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
