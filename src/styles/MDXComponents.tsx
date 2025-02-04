import Image from 'next/image'
import Link from 'next/link'
import { Callout } from '@/components/mdx/Callout'

export const MDXComponents = {
	a: ({ href, children }: { href: string; children: React.ReactNode }) => (
		<Link
			href={href}
			className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300'>
			{children}
		</Link>
	),

	img: ({ src, alt }: { src: string; alt: string }) => (
		<Image
			src={src}
			alt={alt}
			width={800}
			height={400}
			className='rounded-lg'
		/>
	),
	hr: () => <hr className='border-t border-slate-200 my-6' />,

	Callout
}
