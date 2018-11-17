<template>
  <div id="blog">
    <div class="posts" v-for="post in posts" :key="post.id">
      <span>{{ post.id }}</span>
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'post', params: { id:  post.id } }">More...</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data: function() {
    return {
      posts: []
    };
  },
  methods: {
    getAllPosts: function() {
      let resource = this.$resource(
        "http://jsonplaceholder.typicode.com/posts"
      );
      resource.get().then(function(response) {
        this.posts = response.data;
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
