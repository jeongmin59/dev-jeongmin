import type { Post } from '@/types/Post'
import { PostCard } from '@/components/blog/list/PostCard'

interface PostListProps {
	posts: Post[]
}

export function PostList({ posts }: PostListProps) {
	return (
		<div className='flex flex-col gap-4 text-slate-800 dark:text-slate-50'>
			{posts.map((post) => (
				<PostCard key={post.date} post={post} />
			))}
		</div>
	)
}
