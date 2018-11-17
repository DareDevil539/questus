<template>
  <div id="post" v-if="post">
    <h1>{{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
/* eslint-disable no-console */

export default {
  name: "Post",
  data: function() {
    return {
      post: null
    };
  },
  methods: {
    getAllPosts: function() {
      let postId = this.$route.params.id;
      let resource = this.$resource(
        "http://jsonplaceholder.typicode.com/posts{/id}"
      );
      resource.get({ id: postId }).then(function(response) {
        this.post = response.data;
      });
    }
  },
  created: function() {
    this.getAllPosts();
  }
};
</script>

<style scoped>

</style>