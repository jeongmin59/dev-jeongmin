import { PostBody } from '@/components/blog/detail/PostBody'
import { getPost } from '@/lib/posts'
import { compileMDXWithPrettyCode } from '@/lib/mdx'

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
	const { content } = await compileMDXWithPrettyCode(post.content)

	return <PostBody metadata={post.metadata}>{content}</PostBody>
}
