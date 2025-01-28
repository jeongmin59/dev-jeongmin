export type PostMetadata = {
	title: string
	date: string
	description: string
	tags: string[]
	category: string
	thumbnail: string
}

export type Post = PostMetadata & {
	slug: string
	content: string
}
