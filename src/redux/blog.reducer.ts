import { createAction, createReducer } from '@reduxjs/toolkit'
import { initialBlogList } from 'constants/blog'
import { Blog } from 'types/blog.type'

interface BlogState {
  blogList: Blog[]
  editingBlog: Blog | null
}

const initialState: BlogState = {
  blogList: initialBlogList,
  editingBlog: null
}

export const addBlog = createAction<Blog>('blog/addBlog')
export const deleteBlog = createAction<string>('blog/deleteBlog')
export const startEditingBlog = createAction<string>('blog/startEditingBlog')
export const cancelEditingBlog = createAction('blog/cancelEditingBlog')
export const finishEditingBlog = createAction<Blog>('blog/finishEditingBlog')

const blogReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBlog, (state, action) => {
      const blog = action.payload
      state.blogList.push(blog)
    })
    .addCase(deleteBlog, (state, action) => {
      const blogId = action.payload
      const foundBlogIndex = state.blogList.findIndex((blog) => blog.id === blogId)

      if (foundBlogIndex !== -1) {
        state.blogList.splice(foundBlogIndex, 1)
      }
    })
    .addCase(startEditingBlog, (state, action) => {
      const blogId = action.payload
      const foundBlog = state.blogList.find((blog) => blog.id === blogId) || null
      state.editingBlog = foundBlog
    })
    .addCase(cancelEditingBlog, (state) => {
      state.editingBlog = null
    })
    .addCase(finishEditingBlog, (state, action) => {
      const blogId = action.payload.id
      state.blogList.some((blog, index) => {
        if (blog.id === blogId) {
          state.blogList[index] = action.payload

          return true
        }

        return false
      })

      state.editingBlog = null
    })
})

export default blogReducer
