import type { PostMetadata } from '@/types/Post'
import { PostHeader } from '@/components/blog/detail/PostHeader'

interface PostBodyProps {
	metadata: PostMetadata
	children: React.ReactNode
}

export function PostBody({ metadata, children }: PostBodyProps) {
	return (
		<article className='max-w-2xl mx-auto py-4 sm:py-6 md:py-8 px-4 md:px-4'>
			<PostHeader metadata={metadata} />
			<div className='prose prose-sm sm:prose-base md:prose-base dark:prose-invert max-w-none'>
				{children}
			</div>
		</article>
	)
}
