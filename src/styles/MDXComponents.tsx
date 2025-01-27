import type { ComponentProps } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const MDXComponents = {
	h1: ({ className, ...props }: ComponentProps<'h1'>) => (
		<h1
			className={cn('text-3xl font-bold text-slate-900 mt-8 mb-6', className)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: ComponentProps<'h2'>) => (
		<h2
			className={cn('text-2xl font-bold text-slate-800 mt-8 mb-4', className)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: ComponentProps<'h3'>) => (
		<h3
			className={cn(
				'text-xl font-semibold text-slate-700 mt-6 mb-3',
				className
			)}
			{...props}
		/>
	),
	p: ({ className, ...props }: ComponentProps<'p'>) => (
		<p className={cn('text-slate-600 leading-7 mb-6', className)} {...props} />
	),
	a: ({ href = '', ...props }: ComponentProps<'a'>) => (
		<Link
			href={href}
			className='text-indigo-600 hover:text-indigo-500 transition-colors'
			{...props}
		/>
	),
	img: ({ src = '', alt = '' }: { src: string; alt: string }) => (
		<Image
			src={src}
			alt={alt}
			width={800}
			height={400}
			className='my-8 rounded-xl shadow-lg'
		/>
	),
	code: ({ children }: { children: React.ReactNode }) => (
		<code className='bg-slate-100 text-indigo-600 rounded-md px-2 py-1 text-sm font-medium'>
			{children}
		</code>
	),
	pre: ({ className, ...props }: ComponentProps<'pre'>) => (
		<pre
			className={cn(
				'bg-slate-950 text-slate-100 p-6 rounded-xl overflow-x-auto my-6 shadow-lg',
				className
			)}
			{...props}
		/>
	),
	blockquote: ({ children }: { children: React.ReactNode }) => (
		<blockquote className='bg-slate-100 text-slate-700 p-4 rounded-lg my-6'>
			{children}
		</blockquote>
	),
	hr: () => <hr className='border-t border-slate-200 my-8' />
}
