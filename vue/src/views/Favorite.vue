<template>
  <div class="favorite">
    <h1>{{ username }}'s Favorite Posts</h1>
    <div class="favorite-feed">
      <div class="favorite-post" v-for="post in posts.slice().reverse()" v-bind:key="post.postId">
        <router-link v-bind:to="{ name: 'details', params: { username: post.username, postId: post.postId }}">
          <img v-bind:src="post.imgURL" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import likesService from "../services/LikesService";

export default {
  name: "favorite",
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.username = this.$route.params.username;
    likesService.getLikes(this.username).then((response) => {
      this.posts = response.data;
    });
  },
};
</script>

<style>
.favorite {
  margin-bottom: 5em;
}

.favorite-feed {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin: 0 auto 5em auto;
  gap: 2em;
}

.favorite-post {
  width: 400px;
  background: rgba(255, 255,255, 0.8);
  padding: 1em;
  border-radius: 5px;
  box-sizing: border-box;
}

.favorite-post img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}

.favorite-post img:hover {
  opacity: 0.8;
}

.favorite-feed {
  margin: auto;
}


</style>