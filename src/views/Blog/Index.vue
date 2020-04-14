<template>
  <v-container class="home">
    <ul>
      <v-container
        fluid
        class="grey lighten-5 mb-4"
      >
        <v-toolbar
          :color="'elevation-0'"
        >
          <v-toolbar-title class="grey--text text--darken-4">Blog Posts</v-toolbar-title>

          <v-spacer></v-spacer>


          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>

        <!-- Post Cards -->

        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="post in posts"
              :key="post.title"
              :cols="post.flex"
            >
              <post-card
                :post="post"
              />
            </v-col>
          </v-row>
        </v-container>

        <!-- Media Card -->
      </v-container>
    </ul>
  </v-container>
</template>

<script>

import PostCard from '@/views/Blog/PostCard';

export default {
  name: 'Index',
  components: { PostCard },
  mounted() {
    this.$store.dispatch("blog/fetchPosts")
  },
  computed: {
    posts() {
      return this.$store.getters["blog/getPosts"]
    },
  },
};
</script>
