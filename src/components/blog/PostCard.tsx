import type { Post } from '@/types/Post'
import Link from 'next/link'
import { PostTags } from './PostTags'
import { formatDate } from '@/lib/utils'

export function PostCard({ post }: { post: Post }) {
	return (
		<article className='border rounded-lg p-6 hover:shadow-lg transition-shadow'>
			<Link href={`/blog/${post.category}/${post.slug}`}>
				<h2 className='text-2xl font-semibold mb-2 hover:text-indigo-600'>
					{post.title}
				</h2>
			</Link>

			<div className='flex items-center text-gray-600 mb-4'>
				<time>{formatDate(post.date)}</time>
			</div>
			<p className='text-gray-700 mb-4'>{post.description}</p>
			<PostTags tags={post.tags} />
		</article>
	)
}
