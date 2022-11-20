<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">
        Today I Learned
      </h1>
      <LoadingSpinner v-if="isLoading" />
      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :post-item="postItem"
          @refresh="fetchData"
        />
      </ul>
    </div>
    <router-link
      to="/add"
      class="create-button"
    >
      <ion-icon name="add-outline" />
    </router-link>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { fetchPosts } from '@/api/posts'
export default {
  components: {
    PostListItem,
    LoadingSpinner,
  },
  data(){
    return {
      postItems: [],
      isLoading: false,
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    async fetchData(){
      this.isLoading = true
      const { data } = await fetchPosts()
      this.isLoading = false
      this.postItems = data.posts
    },
  },
}
</script>

<style></style>