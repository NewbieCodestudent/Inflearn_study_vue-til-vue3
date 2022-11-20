<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.content }}
    </div>
    <div class="post-time">
      {{ $formatDate(postItem.createdAt) }}
      <ion-icon
        class="icon"
        name="create-outline"
        @click="routeEditPage"
      />
      <ion-icon
        class="icon"
        name="trash-outline"
        @click="deleteItem"
      />
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts'
export default {
  // filters: {
  //   formatDate(value){
  //     return new Date(value)
  //   },
  // },
  props: {
    postItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deleteItem(){
      if (confirm('You want to delete it?')){
        await deletePost(this.postItem._id)
        console.log('delete')
        // eslint-disable-next-line vue/require-explicit-emits
        this.$emit('refresh')
      }      
    },
    routeEditPage(){
      const id = this.postItem._id
      this.$router.push(`/post/${id}`)
    },
  },
}
</script>

<style>

</style>