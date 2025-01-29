import Image from 'next/image'
import Link from 'next/link'

export const MDXComponents = {
	a: ({ href, children }: { href: string; children: React.ReactNode }) => (
		<Link href={href} className='text-blue-600 hover:underline'>
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
	hr: () => <hr className='border-t border-slate-200 my-8' />
}
