interface PostTagsProps {
	tags: string[]
}

export function PostTags({ tags }: PostTagsProps) {
	return (
		<div className='flex flex-wrap gap-2'>
			{tags.map((tag) => (
				<span key={tag} className='bg-gray-100 px-3 py-1 rounded-full text-sm'>
					{tag}
				</span>
			))}
		</div>
	)
}
