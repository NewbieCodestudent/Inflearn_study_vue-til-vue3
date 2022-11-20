<template>
  <div class="contents">
    <h1 class="page-header">
      생성페이지
    </h1>
    <div class="form-wrapper">
      <form
        class="form"
        @submit.prevent="submitForm"
      >
        <div>
          <label for="title">Title : </label>
          <input
            id="title"
            v-model="title"
            type="text"
          >
        </div>
        <div>
          <label for="contents">Contents : </label>
          <textarea
            id="contents"
            v-model="contents"
            type="text"
            rows="5"
          />
          <p
            v-if="!isContentsValid"
            class="validation-text warning"
          >
            Contents length must be less than 250
          </p>
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!isContentsValid || !contents || !title"
        >
          Create
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { createPost } from '@/api/posts'
export default {
  data(){
    return {
      title: '',
      contents: '',
      logMessage:'',
    }
  },
  computed: {
    isContentsValid(){
      return this.contents.length <= 200
    },
  },
  methods: {
    async submitForm(){
      try {
        const data = {
          title: this.title,
          contents: this.contents,
        }
        const response = await createPost(data)
        console.log(response)
        this.$router.push('/main')
      } catch (error){
        console.log(error.response.data.message)
        this.logMessage = error.response.data.message
      }
    },
  },
}
</script>

<style scoped>
.from-wrapper .from {
  width: 100%;
}
.btn {
  color: white;
}
</style>