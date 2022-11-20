// 학습 노트 데이터를 조회하는 API
import { posts } from './index'

function fetchPosts(){
  return posts.get('/')
}

function createPost(postData){
  return posts.post('/', postData)
}

// 학습 데이터를 삭제하는 API
function deletePost(postId){
  return posts.delete(postId)
}

// 학습 데이터를 가져로는 API
function fetchPost(postId){
  return posts.get(postId)
}

// 학습 데이터를 수정하는 API
function editPost(postId, postData){
  return posts.put(postId, postData)
}

export {
  fetchPosts,
  createPost,
  deletePost,
  fetchPost,
  editPost,
}