import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { MDXComponents } from '@/styles/MDXComponents'

export async function compileMDXWithPrettyCode(source: string) {
	return compileMDX({
		source,
		components: MDXComponents,
		options: {
			mdxOptions: {
				remarkPlugins: [remarkGfm],
				rehypePlugins: [
					[
						rehypePrettyCode,
						{
							theme: 'monokai',
							keepBackground: true,
							showLineNumbers: true,
							onVisitLine(node: {
								children: Array<{ type: string; value: string }>
								properties: { className: string[]; line?: string }
							}) {
								if (node.children.length === 0) {
									node.children = [{ type: 'text', value: ' ' }]
								}
								const lineNumber = String(node.properties.line || '')
								node.properties.line = lineNumber
								node.properties.className = ['line-number']
							},
							onVisitHighlightedLine(node: {
								properties: { className?: string[] }
							}) {
								if (!node.properties.className) {
									node.properties.className = []
								}
								node.properties.className.push('highlighted')
							},
							onVisitHighlightedWord(node: {
								properties: { className?: string[] }
							}) {
								if (!node.properties.className) {
									node.properties.className = []
								}
								node.properties.className.push('word-highlighted')
							}
						}
					]
				]
			}
		}
	})
}
