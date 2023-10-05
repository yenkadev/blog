import { useSelector } from 'react-redux'
import { RootState } from 'redux/store'
import PostItem from '../BlogItem'

export interface IPostListProps {}

export default function PostList(props: IPostListProps) {
  const postList = useSelector((state: RootState) => state.blog.blogList)

  const handleDelete = (blogId: string) => {}

  const handleStartEditing = (blogId: string) => {}

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>Customers also purchased</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {postList.map((post) => (
            <PostItem post={post} key={post.id} handleDelete={handleDelete} handleStartEditing={handleStartEditing} />
          ))}
        </div>
      </div>
    </div>
  )
}
