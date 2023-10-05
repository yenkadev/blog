import { createReducer } from '@reduxjs/toolkit'
import { initialPostList } from 'constants/blog'
import { Blog } from 'types/blog.type'

interface BlogState {
  blogList: Blog[]
}

const initialState: BlogState = {
  blogList: initialPostList
}

const blogReducer = createReducer(initialState, (builder) => {})

export default blogReducer
