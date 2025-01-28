import { compileMDX } from 'next-mdx-remote/rsc'
import { PostBody } from '@/components/blog/detail/PostBody'
import { getPost } from '@/lib/posts'
import { MDXComponents } from '@/styles/MDXComponents'

interface PostPageProps {
	params: {
		slug: string
		category: string
	}
}

export default async function PostPage({ params }: PostPageProps) {
	const resolvedParams = await Promise.resolve(params)
	const { category, slug } = resolvedParams

	const post = await getPost(category, slug)
	const { content } = await compileMDX({
		source: post.content,
		components: MDXComponents
	})

	return <PostBody metadata={post.metadata}>{content}</PostBody>
}
