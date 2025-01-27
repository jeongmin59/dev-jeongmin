import type { PostMetadata } from '@/types/Post'
import PostHeader from '@/components/blog/PostHeader'

interface PostBodyProps {
	metadata: PostMetadata
	children: React.ReactNode
}

export function PostBody({ metadata, children }: PostBodyProps) {
	return (
		<article className='max-w-2xl mx-auto py-8'>
			<PostHeader metadata={metadata} />
			<div className='prose prose-lg max-w-none'>{children}</div>
		</article>
	)
}
