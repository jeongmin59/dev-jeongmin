export type Post = {
	category: string
	slug: string
	title: string
	date: string
	description: string
	tags: string[]
	content: string
}

export type PostMetadata = {
	title: string
	date: string
	description: string
	tags: string[]
	category: string
}
