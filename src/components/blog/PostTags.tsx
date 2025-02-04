interface PostTagsProps {
	tags: string[]
}

export function PostTags({ tags }: PostTagsProps) {
	return (
		<div className='flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<span
					key={tag}
					className='inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600 transition-colors hover:bg-indigo-100 hover:text-indigo-700 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700 dark:hover:text-indigo-200'>
					{tag}
				</span>
			))}
		</div>
	)
}
