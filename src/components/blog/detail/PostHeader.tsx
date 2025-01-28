import type { PostMetadata } from '@/types/Post'
import { PostTags } from '@/components/blog/PostTags'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

export function PostHeader({ metadata }: { metadata: PostMetadata }) {
	return (
		<header className='mb-4 sm:mb-6 md:mb-8'>
			{metadata.thumbnail && (
				<div className='mb-4 sm:mb-5 md:mb-6 relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28'>
					<Image
						src={metadata.thumbnail}
						alt={`${metadata.title} 썸네일`}
						fill
						className='object-cover rounded-full'
						priority
					/>
				</div>
			)}
			<div className='flex items-center gap-3 mb-3'>
				{metadata.category && (
					<span className='font-medium text-indigo-600 dark:text-indigo-400'>
						{metadata.category}
					</span>
				)}
				<span className='text-slate-400'>•</span>
				<time className='text-sm font-medium text-slate-600 dark:text-slate-400'>
					{formatDate(metadata.date)}
				</time>
			</div>
			<h1 className='text-2xl md:text-3xl font-bold mb-4'>{metadata.title}</h1>
			<PostTags tags={metadata.tags} />
		</header>
	)
}
