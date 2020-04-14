<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Vue Blog</h2>
    <p>Posts</p>
    <ul>
      <li v-for="post in posts">

      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
