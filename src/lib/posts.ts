import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import { cache } from 'react'
import type { Post, PostMetadata } from '@/types/Post'

export async function getPosts(): Promise<Post[]> {
	const postsDirectory = path.join(process.cwd(), '/posts')
	const categories = await fs.readdir(postsDirectory)

	const posts: Post[] = []

	for (const category of categories) {
		const categoryPath = path.join(postsDirectory, category)
		const slugs = await fs.readdir(categoryPath)

		for (const slug of slugs) {
			if (slug === 'content.mdx') continue

			const fullPath = path.join(categoryPath, slug, 'content.mdx')
			const fileContents = await fs.readFile(fullPath, 'utf8')
			const { data, content } = matter(fileContents)

			posts.push({
				category,
				slug,
				title: data.title,
				date: data.date,
				description: data.description,
				tags: data.tags,
				content,
				thumbnail: data.thumbnail
			})
		}
	}

	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	)
}

export const getPost = cache(async (category: string, slug: string) => {
	const filePath = path.join(
		process.cwd(),
		'/posts',
		category,
		slug,
		'content.mdx'
	)

	const fileContent = await fs.readFile(filePath, 'utf8')
	const { data, content } = matter(fileContent)

	return {
		metadata: data as PostMetadata,
		content
	}
})

export const getAllPosts = cache(async () => {
	const postsDirectory = path.join(process.cwd(), '/posts')
	const categories = await fs.readdir(postsDirectory)

	const posts = await Promise.all(
		categories.flatMap(async (category) => {
			const categoryPath = path.join(postsDirectory, category)
			const slugs = await fs.readdir(categoryPath)

			return Promise.all(
				slugs
					.filter((slug) => slug !== 'content.mdx')
					.map(async (slug) => {
						const post = await getPost(category, slug)
						return {
							...post,
							category,
							slug
						}
					})
			)
		})
	)

	return posts
		.flat()
		.sort(
			(a, b) =>
				new Date(b.metadata.date).getTime() -
				new Date(a.metadata.date).getTime()
		)
})
