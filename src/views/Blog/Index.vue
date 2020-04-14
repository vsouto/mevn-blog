<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Vue Blog</h2>
    <p>Posts</p>
    <ul>
      <li v-for="post in posts"
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Index',
  computed: {
    posts() {
      return [];
    }
  }
};
</script>
