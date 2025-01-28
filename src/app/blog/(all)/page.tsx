import { getPosts } from '@/lib/posts'
import { PostList } from '@/components/blog/list/PostList'

export default async function BlogPage() {
	const posts = await getPosts()

	return (
		<div className='max-w-4xl mx-auto px-4'>
			<h1 className='text-4xl font-bold mb-8'>All Posts</h1>
			<PostList posts={posts} />
		</div>
	)
}
