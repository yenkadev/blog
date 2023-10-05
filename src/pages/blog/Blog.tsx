import PostList from 'components/BlogList'
import CreatePost from 'components/CreateBlog'

const Blog = () => {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  )
}

export default Blog
