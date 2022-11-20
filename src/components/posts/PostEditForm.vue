<template>
  <div class="contents">
    <h1 class="page-header">
      수정페이지
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
          수정
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts'
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
  async created(){
    const id = this.$route.params.id
    const {data} = await fetchPost(id)
    console.log(data)
    this.title = data.title
    this.contents = data.contents
  },
  methods: {
    async submitForm(){
      try {
        const id = this.$route.params.id
        await editPost(id, {
          title: this.title,
          contents: this.contents,
        })
        this.$router.push('/main')
      } catch (error){
        console.log(error)
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