import type { Post } from '@/types/Post'
import Link from 'next/link'
import Image from 'next/image'
import { PostTags } from '@/components/blog/PostTags'
import { formatDate } from '@/lib/utils'

export function PostCard({ post }: { post: Post }) {
	return (
		<article className='group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:translate-y-[-2px] hover:shadow-lg dark:border-slate-800 dark:bg-slate-900'>
			<Link
				href={`/blog/${post.category}/${post.slug}`}
				className='flex w-full flex-col sm:flex-row items-center p-4 gap-2 sm:gap-6'>
				{post.thumbnail && (
					<div className='relative w-full sm:w-auto mb-4 sm:mb-0'>
						<div className='relative h-52 sm:h-32 sm:w-32 w-full overflow-hidden rounded-lg'>
							<Image
								src={post.thumbnail}
								alt={post.title}
								fill
								className='object-cover transition-transform duration-300 group-hover:scale-105'
							/>
						</div>
					</div>
				)}
				<div className='flex flex-1 flex-col'>
					<div className='flex items-center gap-2'>
						<span className='h-4 w-[3px] rounded-full bg-indigo-600 dark:bg-indigo-400' />
						<span className='text-sm font-medium text-indigo-600 dark:text-indigo-400'>
							{post.category}
						</span>
					</div>

					<h2 className='mt-2 line-clamp-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400'>
						{post.title}
					</h2>

					<p className='mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-400'>
						{post.description}
					</p>

					<div className='mt-3 flex flex-wrap items-center gap-3'>
						<time className='text-sm font-medium text-slate-600 dark:text-slate-400'>
							{formatDate(post.date)}
						</time>
						<PostTags tags={post.tags} />
					</div>
				</div>
			</Link>
		</article>
	)
}
