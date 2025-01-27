import type { PostMetadata } from '@/types/Post'
import { PostTags } from '@/components/blog/PostTags'
import { formatDate } from '@/lib/utils'

function PostHeader({ metadata }: { metadata: PostMetadata }) {
	return (
		<header className='mb-8'>
			<h1 className='text-4xl font-bold mb-4'>{metadata.title}</h1>
			<div className='flex items-center text-gray-600 mb-4'>
				<time>{formatDate(metadata.date)}</time>
			</div>
			<PostTags tags={metadata.tags} />
		</header>
	)
}

export default PostHeader
