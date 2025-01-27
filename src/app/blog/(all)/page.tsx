import { getPosts } from '@/lib/posts'
import { PostCard } from '@/components/blog/PostCard'

export default async function BlogPage() {
	const posts = await getPosts()

	return (
		<div className='max-w-4xl mx-auto'>
			<h1 className='text-3xl font-bold mb-8'>All Posts</h1>
			<div className='space-y-8'>
				{posts.map((post) => (
					<PostCard key={post.slug} post={post} />
				))}
			</div>
		</div>
	)
}
